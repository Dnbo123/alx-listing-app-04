import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        cardNumber: "",
        expirationDate: "",
        cvv: "",
        billingAddress: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.SyntheticEvent) => {
        e.preventDefault();
        setLoading(true);
        setError(() => "Failed to Submit booking");

        try{
            const response = await axios.post("api/bookings", formData);
            alert("Booking confirmed!");
        } catch (error) {
            setError( "Failed to Submit booking");
        } finally {
            setLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {/**Form fields for booking details */}
            <button type="submit" disabled={loading}>
            {loading ? "Processing..." : "Confirm $ pay"}
            </button>
            {error && <p className="text-red-500">{error}</p>}
        </form>
    );
}