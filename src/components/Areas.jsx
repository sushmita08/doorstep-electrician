const areas = [
'Bandra',
'Khar',
'Santacruz',
'Vile Parle',
];


export default function Areas() {
return (
<div className="py-10 text-center">
<h2 className="text-3xl font-bold mb-6">
Service Areas
</h2>


<div className="flex gap-4 justify-center flex-wrap">
{areas.map((area) => (
<div
key={area}
className="bg-yellow-100 px-6 py-3 rounded-xl shadow"
>
{area}
</div>
))}
</div>
</div>
);
}