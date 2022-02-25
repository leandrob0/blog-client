export const formatDate = (dateString) => {
    const date = dateString.split("T");
    return date[0];
}