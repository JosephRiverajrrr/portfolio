
import { getFirestore, collection, query, where, getDocs, setDoc, doc, orderBy, limit, Timestamp, startAt, endAt } from "firebase/firestore";
import moment from 'moment';

let msg = "", msg_type = "";

export const fetchProduct = async (searchTerm) => {
    let newSearchTerm = searchTerm?.value;
    let db = getFirestore(); // Initialize Firestore
    const collectionRef = collection(db, 'products'); // Reference the 'products' collection

    // Create a query to fetch documents where 'status' is true
    const activeProductsQuery = query(collectionRef,
        orderBy("product_added", "desc"));

    try {
        const querySnapshot = await getDocs(activeProductsQuery); // Execute the query
        const activeProducts = querySnapshot.docs.map(doc => ({
            id: doc.id, // Include document ID
            ...doc.data() // Spread the document data
        }));
        // productList.value = activeProducts
        // isLoading.value = false;
        let newSet = (activeProducts).filter((product) =>
            product.product_name.toLowerCase().match(newSearchTerm?.toLowerCase())
        );
        return newSearchTerm !== "" && newSearchTerm !== undefined ? newSet : activeProducts;
    } catch (error) {
        console.error("Error fetching active products:", error);
        throw error;
    }
};

export const fetchStocks = async (searchTerm) => {
    let newSearchTerm = searchTerm?.value;
    let db = getFirestore(); // Initialize Firestore
    const collectionRef = collection(db, 'stocks'); // Reference the 'products' collection

    // Create a query to fetch documents where 'status' is true
    const activeProductsQuery = query(collectionRef, where("stock_status", "==", true));

    try {
        const querySnapshot = await getDocs(activeProductsQuery); // Execute the query
        const activeProducts = querySnapshot.docs.map(doc => ({
            id: doc.id, // Include document ID
            ...doc.data() // Spread the document data
        }));
        // productList.value = activeProducts
        // isLoading.value = false;
        let newSet = (activeProducts).filter((product) =>
            product.stock_name.toLowerCase().match(newSearchTerm?.toLowerCase())
        );
        return newSearchTerm !== "" && newSearchTerm !== undefined ? newSet : activeProducts;
    } catch (error) {
        console.error("Error fetching active products:", error);
        throw error;
    }
};

export const fetchStocksLogs = async (id) => {
    let db = getFirestore(); // Initialize Firestore
    const collectionRef = collection(db, 'stock_logs'); // Reference the 'products' collection

    // Create a query to fetch documents where 'status' is true
    // const activeProductsQuery = query(collectionRef, where("stock_id", "==", id), orderBy("stock_added", "desc"));
    const activeProductsQuery = query(
        collectionRef,
        orderBy("stock_added", "desc")
    );

    try {
        const querySnapshot = await getDocs(activeProductsQuery); // Execute the query
        const activeProducts = querySnapshot.docs.map(doc => ({
            id: doc.id, // Include document ID
            ...doc.data() // Spread the document data
        }));
        // productList.value = activeProducts
        // isLoading.value = false;
        return activeProducts; // Return the fetched products
    } catch (error) {
        console.error("Error fetching active products:", error);
        throw error;
    }
};

export const fetchRequestInventory = async () => {
    let db = getFirestore(); // Initialize Firestore
    const collectionRef = collection(db, 'inventory'); // Reference the 'products' collection

    // Create a query to fetch documents where 'status' is true
    const activeProductsQuery = query(collectionRef);

    try {
        const querySnapshot = await getDocs(activeProductsQuery); // Execute the query
        const activeProducts = querySnapshot.docs.map(doc => ({
            id: doc.id, // Include document ID
            ...doc.data() // Spread the document data
        }));
        // productList.value = activeProducts
        // isLoading.value = false;
        return activeProducts; // Return the fetched products
    } catch (error) {
        console.error("Error fetching active products:", error);
        throw error;
    }
};
export const handleCheckout = async (cart, discount, orderTotal, currentDate, paymentMethod, amountPaid) => {
    let db = getFirestore();
    const saleRef = collection(db, 'sale');

    // Query to get the last document based on order_number
    const q = query(saleRef, orderBy('order_number', 'desc'), limit(1)) ?? 1;

    // Get the last order number
    const querySnapshot = await getDocs(q);
    let lastOrderNumber = 0;
    if (!querySnapshot.empty) {
        querySnapshot.forEach(doc => {
            lastOrderNumber = doc.data().order_number;
        });
    }

    // Increment the order number
    const newOrderNumber = lastOrderNumber + 1;
  
 
    try {
        const docRef = doc(collection(db, 'sale'));
        await setDoc(docRef, {
            order_number: newOrderNumber ?? 1,
            order_status: 'Completed',
            created_date: currentDate,
            order_placed: moment().format(),
            products: cart.value,
            discount: discount.value,
            discount_type: "Cash",
            order_total: orderTotal.value,
            payment_method: paymentMethod.value,
            amount_paid: amountPaid.value
        });
        msg_type = "Success";
        msg = "Checkout successfully"; // Success message
    } catch (error) {
        console.error("Error during checkout:", error);
        msg_type = "Danger";
        msg = "There was an error during checkout. Please try again.";
    }

    return [{
        type: msg_type,
        message: msg
    }]; // Return the message
};



export const fetchSales = async () => {
    let db = getFirestore(); // Initialize Firestore
    const collectionRef = collection(db, 'sale'); // Reference the 'products' collection
    const activeProductsQuery = query(collectionRef,
        where("order_status", "==", 'Completed'));
    try {
        const querySnapshot = await getDocs(activeProductsQuery); // Execute the query
        const activeProducts = querySnapshot.docs.map(doc => ({
            id: doc.id, // Include document ID
            ...doc.data() // Spread the document data
        }));
        // productList.value = activeProducts
        // isLoading.value = false;
        return activeProducts; // Return the fetched products
    } catch (error) {
        console.error("Error fetching active sales report:", error);
        throw error;
    }
};

export const convertDateToTimestamp = (dateStr) => {
    const dateObj = new Date(dateStr + "T00:00:00Z"); // Midnight UTC
    return Timestamp.fromDate(dateObj);
};

export const fetchSalesInDateRange = async (startDate, endDate) => {
    let db = getFirestore();
    // Firestore Query
    const salesQuery = query(
        collection(db, "sale"), // Change "orders" to your collection name
        where("order_status", "==", 'Completed')
    );

    // Fetch matching sales
    const querySnapshot = await getDocs(salesQuery);
    const sales = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); 
    return sales;
};

export const fetchExpenses = async () => {
    let db = getFirestore(); // Initialize Firestore
    const collectionRef = collection(db, 'expenses'); // Reference the 'products' collection

    // Create a query to fetch documents where 'status' is true
    const activeProductsQuery = query(collectionRef,
        where("expense_status", "==", true),
        orderBy("expense_data", "desc"));

    try {
        const querySnapshot = await getDocs(activeProductsQuery); // Execute the query
        const activeProducts = querySnapshot.docs.map(doc => ({
            id: doc.id, // Include document ID
            ...doc.data() // Spread the document data
        }));
        return activeProducts;
    } catch (error) {
        console.error("Error fetching active products:", error);
        throw error;
    }
};
