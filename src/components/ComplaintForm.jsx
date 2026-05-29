import { useState } from 'react';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';


export default function ComplaintForm() {
const [formData, setFormData] = useState({
name: '',
phone: '',
area: '',
address: '',
issueType: '',
appointmentDate: '',
appointmentTime: '',
complaint: '',
});


const handleChange = (e) => {
setFormData({
...formData,
[e.target.name]: e.target.value,
});
};


const handleSubmit = async (e) => {
e.preventDefault();


try {
await addDoc(collection(db, 'complaints'), {
...formData,
status: 'Pending',
createdAt: Timestamp.now(),
});


alert('Complaint submitted successfully');


setFormData({
name: '',
phone: '',
area: '',
address: '',
issueType: '',
appointmentDate: '',
appointmentTime: '',
complaint: '',
});
} catch (error) {
console.error(error);
}
};


return (
<>
<form
onSubmit={handleSubmit}
className="max-w-2xl mx-auto p-6 space-y-4"
>

<input
type="text"
name="name"
placeholder="Full Name"
className="w-full border p-3 rounded"
onChange={handleChange}
value={formData.name}
required
/>

<input
type="tel"
name="phone"
placeholder="Phone Number"
className="w-full border p-3 rounded"
onChange={handleChange}
value={formData.phone}
required
/>


<select
name="area"
className="w-full border p-3 rounded"
onChange={handleChange}
value={formData.area}
required
>

<option value="">Select Area</option>
<option>Bandra</option>
<option>Khar</option>
<option>Santacruz</option>
<option>Vile Parle</option>
</select>


<textarea
name="address"
placeholder="Full Address"
className="w-full border p-3 rounded"
onChange={handleChange}
value={formData.address}
/>

<select
name="issueType"
className="w-full border p-3 rounded"
onChange={handleChange}
value={formData.issueType}
required
>
<option value="">Select Issue</option>
<option>Fan Repair</option>
<option>Light Issue</option>
<option>MCB Trip</option>
<option>Wiring Problem</option>
<option>Switch Board Repair</option>
</select>

<input
type="date"
name="appointmentDate"
className="w-full border p-3 rounded"
onChange={handleChange}
value={formData.appointmentDate}
required
/>


<input
type="time"
name="appointmentTime"
className="w-full border p-3 rounded"
onChange={handleChange}
value={formData.appointmentTime}
required
/>

<textarea
name="complaint"
placeholder="Describe your issue"
className="w-full border p-3 rounded"
onChange={handleChange}
value={formData.complaint}
/>


<button
type="submit"
className="bg-black text-white px-6 py-3 rounded"
>
Submit Complaint
</button>
</form>
</>
);
}