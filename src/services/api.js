// services/api.js
export const fetchTickets = async () => {
  try {
    const response = await fetch(
      "https://api.quicksell.co/v1/internal/frontend-assignment"
    );
    const data = await response.json();
    console.log(data);
    return data.tickets || []; // Make sure it returns an array
  } catch (error) {
    console.error("Error fetching tickets:", error);
    return [];
  }
};
