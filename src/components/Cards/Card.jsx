import React from 'react';

function Card({ icon: Icon, title, value }) {
  return (
    <div className="bg-white w-64 shadow-md rounded-lg p-6 flex items-center">
      <div className="mr-4">{Icon && <Icon className="w-8 h-8 text-indigo-600" />}</div>
      <div>
        <p className="mb-2 text-sm font-medium text-gray-600">{title}</p>
        <p className="text-lg font-semibold text-gray-700">{value}</p>
      </div>
    </div>
  );
}

export default Card;
