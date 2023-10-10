export default function formatDate(dateTimeObj) {
    if (dateTimeObj) {
        // Create a new Date object using the values from the dateTimeObj
        const date = dateTimeObj;

        // Get the components of the date
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Add 1 to month since it's zero-indexed
        const day = String(date.getDate()).padStart(2, '0');

        // Create and return the formatted string
        return `${year}-${month}-${day}`;
    }
    return  "";
}