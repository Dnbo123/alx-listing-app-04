    import { PropertyProps } from "@/interfaces/index";

// BookingSection component takes property as a prop and renders the booking interface
export const BookingSection: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      {/* Display the price per night */}
      <h3 className="text-xl font-semibold">${property.price}/night</h3>

      {/* Check-in date input */}
      <div className="mt-4">
        <label>Check-in</label>
        <input type="date" className="border p-2 w-full mt-2" />
      </div>

      {/* Check-out date input */}
      <div className="mt-4">
        <label>Check-out</label>
        <input type="date" className="border p-2 w-full mt-2" />
      </div>

      {/* Calculate and display the total payment for 7 nights */}
      <div className="mt-4">
        <p>Total payment: <strong>${property.price * 7}</strong></p>
      </div>

      {/* Button to reserve the property */}
      <button className="mt-4 bg-green-500 text-white py-2 px-4 rounded-md">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
