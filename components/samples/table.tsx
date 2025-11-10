import React, { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Copy, ChevronUp, ChevronDown, Search } from 'lucide-react';

const FONTS = {
  COMIC_SANS: '"Comic Sans MS", cursive',
  PAPYRUS: 'Papyrus, fantasy',
  TIMES_NEW_ROMAN: '"Times New Roman", serif',
  IMPACT: 'Impact, sans-serif',
  BRUSH_SCRIPT: '"Brush Script MT", cursive',
  JOKERMAN: 'Jokerman, fantasy'
};

const COLORS = {
  YELLOW: '#FFFF00',
  CYAN: '#00FFFF',
  MAGENTA: '#FF00FF',
  LIME: '#00FF00',
  HOT_PINK: '#FF69B4',
  ORANGE: '#FFA500',
  NEON_GREEN: '#39FF14'
};

// Sample data for the tables
const tableData = {
  users: [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 28, status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32, status: 'Inactive' },
    { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45, status: 'Active' },
    { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 23, status: 'Pending' },
    { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 35, status: 'Active' }
  ],
  products: [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999, stock: 15 },
    { id: 2, name: 'Phone', category: 'Electronics', price: 699, stock: 30 },
    { id: 3, name: 'Desk', category: 'Furniture', price: 299, stock: 8 },
    { id: 4, name: 'Chair', category: 'Furniture', price: 149, stock: 25 },
    { id: 5, name: 'Monitor', category: 'Electronics', price: 399, stock: 12 }
  ],
  tasks: [
    { id: 1, task: 'Design Homepage', assignee: 'Alice', priority: 'High', progress: 80 },
    { id: 2, task: 'Fix Bugs', assignee: 'Bob', priority: 'Medium', progress: 45 },
    { id: 3, task: 'Write Documentation', assignee: 'Charlie', priority: 'Low', progress: 20 },
    { id: 4, task: 'Deploy Server', assignee: 'Alice', priority: 'High', progress: 95 },
    { id: 5, task: 'Test Features', assignee: 'David', priority: 'Medium', progress: 60 }
  ]
};

const tableConfigs = {
  table1: {
    name: 'Shaky Comic Table',
    className: 'w-full shake bg-lime-400 border-8 border-black rounded-2xl overflow-hidden',
    headerClassName: 'bg-yellow-300 text-black font-black text-lg border-b-4 border-black',
    cellClassName: 'bg-lime-400 text-black font-bold border-r-4 border-black last:border-r-0',
    rowClassName: 'border-b-4 border-black hover:bg-yellow-300 transition-colors',
    dataType: 'users',
    columns: ['ID', 'Name', 'Email', 'Age', 'Status'],
    reactCode: `const [sortField, setSortField] = useState('');
const [sortDirection, setSortDirection] = useState('asc');
const [searchTerm, setSearchTerm] = useState('');

const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', age: 28, status: 'Active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 32, status: 'Inactive' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', age: 45, status: 'Active' },
  { id: 4, name: 'Alice Brown', email: 'alice@example.com', age: 23, status: 'Pending' },
  { id: 5, name: 'Charlie Wilson', email: 'charlie@example.com', age: 35, status: 'Active' }
];

const handleSort = (field) => {
  if (sortField === field) {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  } else {
    setSortField(field);
    setSortDirection('asc');
  }
};

const filteredData = data.filter(item =>
  Object.values(item).some(value =>
    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  )
);

<div className="w-full shake bg-lime-400 border-8 border-black rounded-2xl overflow-hidden">
  {/* Search */}
  <div className="p-4 bg-yellow-300 border-b-4 border-black">
    <div className="flex items-center gap-2 max-w-md mx-auto">
      <Search size={20} className="text-black" />
      <input
        type="text"
        placeholder="Search everything..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-4 py-2 bg-lime-400 text-black font-bold border-4 border-black rounded-full placeholder-black"
        style={{ fontFamily: 'Comic Sans MS' }}
      />
    </div>
  </div>

  {/* Table */}
  <table className="w-full">
    <thead>
      <tr className="bg-yellow-300 text-black font-black text-lg border-b-4 border-black">
        {['ID', 'Name', 'Email', 'Age', 'Status'].map((column) => (
          <th
            key={column}
            onClick={() => handleSort(column.toLowerCase())}
            className="p-4 text-left cursor-pointer hover:bg-red-600 hover:text-white transition-colors border-r-4 border-black last:border-r-0"
            style={{ fontFamily: 'Comic Sans MS' }}
          >
            <div className="flex items-center gap-2">
              {column}
              {sortField === column.toLowerCase() && (
                sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {filteredData.map((item, index) => (
        <tr
          key={item.id}
          className="bg-lime-400 text-black font-bold border-b-4 border-black hover:bg-yellow-300 transition-colors"
        >
          <td className="p-4 border-r-4 border-black" style={{ fontFamily: 'Comic Sans MS' }}>
            {item.id}
          </td>
          <td className="p-4 border-r-4 border-black" style={{ fontFamily: 'Comic Sans MS' }}>
            {item.name}
          </td>
          <td className="p-4 border-r-4 border-black" style={{ fontFamily: 'Comic Sans MS' }}>
            {item.email}
          </td>
          <td className="p-4 border-r-4 border-black" style={{ fontFamily: 'Comic Sans MS' }}>
            {item.age}
          </td>
          <td className="p-4" style={{ fontFamily: 'Comic Sans MS' }}>
            {item.status}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>`,
    htmlCode: `<!-- Table Container -->
<div class="w-full shake bg-lime-400 border-8 border-black rounded-2xl overflow-hidden">
  <!-- Search -->
  <div class="p-4 bg-yellow-300 border-b-4 border-black">
    <div class="flex items-center gap-2 max-w-md mx-auto">
      <span class="text-black">🔍</span>
      <input
        type="text"
        id="search-input"
        placeholder="Search everything..."
        class="flex-1 px-4 py-2 bg-lime-400 text-black font-bold border-4 border-black rounded-full placeholder-black"
        style="font-family: 'Comic Sans MS';"
        oninput="filterTable()"
      />
    </div>
  </div>

  <!-- Table -->
  <table class="w-full">
    <thead>
      <tr class="bg-yellow-300 text-black font-black text-lg border-b-4 border-black">
        <th class="p-4 text-left cursor-pointer hover:bg-red-600 hover:text-white transition-colors border-r-4 border-black" onclick="sortTable(0)" style="font-family: 'Comic Sans MS';">
          <div class="flex items-center gap-2">ID ▲</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-red-600 hover:text-white transition-colors border-r-4 border-black" onclick="sortTable(1)" style="font-family: 'Comic Sans MS';">
          <div class="flex items-center gap-2">Name</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-red-600 hover:text-white transition-colors border-r-4 border-black" onclick="sortTable(2)" style="font-family: 'Comic Sans MS';">
          <div class="flex items-center gap-2">Email</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-red-600 hover:text-white transition-colors border-r-4 border-black" onclick="sortTable(3)" style="font-family: 'Comic Sans MS';">
          <div class="flex items-center gap-2">Age</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-red-600 hover:text-white transition-colors" onclick="sortTable(4)" style="font-family: 'Comic Sans MS';">
          <div class="flex items-center gap-2">Status</div>
        </th>
      </tr>
    </thead>
    <tbody id="table-body">
      <tr class="bg-lime-400 text-black font-bold border-b-4 border-black hover:bg-yellow-300 transition-colors">
        <td class="p-4 border-r-4 border-black" style="font-family: 'Comic Sans MS';">1</td>
        <td class="p-4 border-r-4 border-black" style="font-family: 'Comic Sans MS';">John Doe</td>
        <td class="p-4 border-r-4 border-black" style="font-family: 'Comic Sans MS';">john@example.com</td>
        <td class="p-4 border-r-4 border-black" style="font-family: 'Comic Sans MS';">28</td>
        <td class="p-4" style="font-family: 'Comic Sans MS';">Active</td>
      </tr>
      <!-- More rows... -->
    </tbody>
  </table>
</div>`,
    cssCode: `.table-shaky {
  width: 100%;
  background-color: #84cc16;
  border: 8px solid #000000;
  border-radius: 1rem;
  overflow: hidden;
  animation: shake 0.5s infinite;
}

.table-shaky .search {
  padding: 1rem;
  background-color: #fde047;
  border-bottom: 4px solid #000000;
}

.table-shaky .search-input {
  flex: 1;
  padding: 0.5rem 1rem;
  background-color: #84cc16;
  color: #000000;
  font-weight: 700;
  border: 4px solid #000000;
  border-radius: 9999px;
  font-family: 'Comic Sans MS';
}

.table-shaky .search-input::placeholder {
  color: #000000;
}

.table-shaky table {
  width: 100%;
  border-collapse: collapse;
}

.table-shaky th {
  padding: 1rem;
  background-color: #fde047;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  text-align: left;
  border-bottom: 4px solid #000000;
  border-right: 4px solid #000000;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Comic Sans MS';
}

.table-shaky th:last-child {
  border-right: none;
}

.table-shaky th:hover {
  background-color: #dc2626;
  color: #ffffff;
}

.table-shaky td {
  padding: 1rem;
  background-color: #84cc16;
  color: #000000;
  font-weight: 700;
  border-bottom: 4px solid #000000;
  border-right: 4px solid #000000;
  font-family: 'Comic Sans MS';
}

.table-shaky td:last-child {
  border-right: none;
}

.table-shaky tr:hover {
  background-color: #fde047;
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-5px); }
  75% { transform: translateX(5px); }
}`
  },
  table2: {
    name: 'Spinning Rainbow Table',
    className: 'w-full spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 border-4 border-purple-600 rounded-lg overflow-hidden',
    headerClassName: 'bg-white text-black font-black text-lg border-b-2 border-purple-600',
    cellClassName: 'bg-white bg-opacity-50 text-black font-bold border-r-2 border-purple-600 last:border-r-0',
    rowClassName: 'border-b-2 border-purple-600 hover:bg-white hover:bg-opacity-70 transition-colors',
    dataType: 'products',
    columns: ['ID', 'Product', 'Category', 'Price', 'Stock'],
    reactCode: `const [sortField, setSortField] = useState('');
const [sortDirection, setSortDirection] = useState('asc');
const [searchTerm, setSearchTerm] = useState('');

const data = [
  { id: 1, name: 'Laptop', category: 'Electronics', price: 999, stock: 15 },
  { id: 2, name: 'Phone', category: 'Electronics', price: 699, stock: 30 },
  { id: 3, name: 'Desk', category: 'Furniture', price: 299, stock: 8 },
  { id: 4, name: 'Chair', category: 'Furniture', price: 149, stock: 25 },
  { id: 5, name: 'Monitor', category: 'Electronics', price: 399, stock: 12 }
];

const handleSort = (field) => {
  if (sortField === field) {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  } else {
    setSortField(field);
    setSortDirection('asc');
  }
};

const filteredData = data.filter(item =>
  Object.values(item).some(value =>
    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  )
);

<div className="w-full spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 border-4 border-purple-600 rounded-lg overflow-hidden">
  {/* Search */}
  <div className="p-4 bg-white bg-opacity-80 border-b-2 border-purple-600">
    <div className="flex items-center gap-2 max-w-md mx-auto">
      <Search size={20} className="text-black" />
      <input
        type="text"
        placeholder="Find products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-4 py-2 bg-white text-black font-bold border-2 border-purple-600 rounded-lg placeholder-black"
        style={{ fontFamily: 'Papyrus' }}
      />
    </div>
  </div>

  {/* Table */}
  <table className="w-full">
    <thead>
      <tr className="bg-white text-black font-black text-lg border-b-2 border-purple-600">
        {['ID', 'Product', 'Category', 'Price', 'Stock'].map((column) => (
          <th
            key={column}
            onClick={() => handleSort(column.toLowerCase())}
            className="p-4 text-left cursor-pointer hover:bg-purple-600 hover:text-white transition-colors border-r-2 border-purple-600 last:border-r-0"
            style={{ fontFamily: 'Papyrus' }}
          >
            <div className="flex items-center gap-2">
              {column}
              {sortField === column.toLowerCase() && (
                sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {filteredData.map((item) => (
        <tr
          key={item.id}
          className="bg-white bg-opacity-50 text-black font-bold border-b-2 border-purple-600 hover:bg-white hover:bg-opacity-70 transition-colors"
        >
          <td className="p-4 border-r-2 border-purple-600" style={{ fontFamily: 'Papyrus' }}>
            {item.id}
          </td>
          <td className="p-4 border-r-2 border-purple-600" style={{ fontFamily: 'Papyrus' }}>
            {item.name}
          </td>
          <td className="p-4 border-r-2 border-purple-600" style={{ fontFamily: 'Papyrus' }}>
            {item.category}
          </td>
          <td className="p-4 border-r-2 border-purple-600" style={{ fontFamily: 'Papyrus' }}>
            {item.price}
          </td>
          <td className="p-4" style={{ fontFamily: 'Papyrus' }}>
            {item.stock}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>`,
    htmlCode: `<!-- Table Container -->
<div class="w-full spin bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 border-4 border-purple-600 rounded-lg overflow-hidden">
  <!-- Search -->
  <div class="p-4 bg-white bg-opacity-80 border-b-2 border-purple-600">
    <div class="flex items-center gap-2 max-w-md mx-auto">
      <span class="text-black">🔍</span>
      <input
        type="text"
        id="search-input"
        placeholder="Find products..."
        class="flex-1 px-4 py-2 bg-white text-black font-bold border-2 border-purple-600 rounded-lg placeholder-black"
        style="font-family: 'Papyrus';"
        oninput="filterTable()"
      />
    </div>
  </div>

  <!-- Table -->
  <table class="w-full">
    <thead>
      <tr class="bg-white text-black font-black text-lg border-b-2 border-purple-600">
        <th class="p-4 text-left cursor-pointer hover:bg-purple-600 hover:text-white transition-colors border-r-2 border-purple-600" onclick="sortTable(0)" style="font-family: 'Papyrus';">
          <div class="flex items-center gap-2">ID ▲</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-purple-600 hover:text-white transition-colors border-r-2 border-purple-600" onclick="sortTable(1)" style="font-family: 'Papyrus';">
          <div class="flex items-center gap-2">Product</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-purple-600 hover:text-white transition-colors border-r-2 border-purple-600" onclick="sortTable(2)" style="font-family: 'Papyrus';">
          <div class="flex items-center gap-2">Category</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-purple-600 hover:text-white transition-colors border-r-2 border-purple-600" onclick="sortTable(3)" style="font-family: 'Papyrus';">
          <div class="flex items-center gap-2">Price</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-purple-600 hover:text-white transition-colors" onclick="sortTable(4)" style="font-family: 'Papyrus';">
          <div class="flex items-center gap-2">Stock</div>
        </th>
      </tr>
    </thead>
    <tbody id="table-body">
      <tr class="bg-white bg-opacity-50 text-black font-bold border-b-2 border-purple-600 hover:bg-white hover:bg-opacity-70 transition-colors">
        <td class="p-4 border-r-2 border-purple-600" style="font-family: 'Papyrus';">1</td>
        <td class="p-4 border-r-2 border-purple-600" style="font-family: 'Papyrus';">Laptop</td>
        <td class="p-4 border-r-2 border-purple-600" style="font-family: 'Papyrus';">Electronics</td>
        <td class="p-4 border-r-2 border-purple-600" style="font-family: 'Papyrus';">$999</td>
        <td class="p-4" style="font-family: 'Papyrus';">15</td>
      </tr>
      <!-- More rows... -->
    </tbody>
  </table>
</div>`,
    cssCode: `.table-spin {
  width: 100%;
  background: linear-gradient(to right, #ec4899, #f59e0b, #22d3ee);
  border: 4px solid #9333ea;
  border-radius: 0.5rem;
  overflow: hidden;
  animation: spin 2s linear infinite;
}

.table-spin .search {
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.8);
  border-bottom: 2px solid #9333ea;
}

.table-spin .search-input {
  flex: 1;
  padding: 0.5rem 1rem;
  background-color: #ffffff;
  color: #000000;
  font-weight: 700;
  border: 2px solid #9333ea;
  border-radius: 0.5rem;
  font-family: 'Papyrus';
}

.table-spin .search-input::placeholder {
  color: #000000;
}

.table-spin table {
  width: 100%;
  border-collapse: collapse;
}

.table-spin th {
  padding: 1rem;
  background-color: #ffffff;
  color: #000000;
  font-weight: 900;
  font-size: 1.125rem;
  text-align: left;
  border-bottom: 2px solid #9333ea;
  border-right: 2px solid #9333ea;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Papyrus';
}

.table-spin th:last-child {
  border-right: none;
}

.table-spin th:hover {
  background-color: #9333ea;
  color: #ffffff;
}

.table-spin td {
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  color: #000000;
  font-weight: 700;
  border-bottom: 2px solid #9333ea;
  border-right: 2px solid #9333ea;
  font-family: 'Papyrus';
}

.table-spin td:last-child {
  border-right: none;
}

.table-spin tr:hover {
  background-color: rgba(255, 255, 255, 0.7);
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}`
  },
  table3: {
    name: 'Bouncing Times Table',
    className: 'w-full bounce bg-purple-600 border-8 border-yellow-300 rounded-2xl overflow-hidden',
    headerClassName: 'bg-pink-500 text-white font-black text-lg border-b-4 border-yellow-300',
    cellClassName: 'bg-purple-600 text-yellow-300 font-bold border-r-4 border-yellow-300 last:border-r-0',
    rowClassName: 'border-b-4 border-yellow-300 hover:bg-pink-500 transition-colors',
    dataType: 'tasks',
    columns: ['ID', 'Task', 'Assignee', 'Priority', 'Progress'],
    reactCode: `const [sortField, setSortField] = useState('');
const [sortDirection, setSortDirection] = useState('asc');
const [searchTerm, setSearchTerm] = useState('');

const data = [
  { id: 1, task: 'Design Homepage', assignee: 'Alice', priority: 'High', progress: 80 },
  { id: 2, task: 'Fix Bugs', assignee: 'Bob', priority: 'Medium', progress: 45 },
  { id: 3, task: 'Write Documentation', assignee: 'Charlie', priority: 'Low', progress: 20 },
  { id: 4, task: 'Deploy Server', assignee: 'Alice', priority: 'High', progress: 95 },
  { id: 5, task: 'Test Features', assignee: 'David', priority: 'Medium', progress: 60 }
];

const handleSort = (field) => {
  if (sortField === field) {
    setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
  } else {
    setSortField(field);
    setSortDirection('asc');
  }
};

const filteredData = data.filter(item =>
  Object.values(item).some(value =>
    value.toString().toLowerCase().includes(searchTerm.toLowerCase())
  )
);

<div className="w-full bounce bg-purple-600 border-8 border-yellow-300 rounded-2xl overflow-hidden">
  {/* Search */}
  <div className="p-4 bg-pink-500 border-b-4 border-yellow-300">
    <div className="flex items-center gap-2 max-w-md mx-auto">
      <Search size={20} className="text-white" />
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="flex-1 px-4 py-2 bg-purple-600 text-yellow-300 font-bold border-4 border-yellow-300 rounded-2xl placeholder-yellow-300"
        style={{ fontFamily: 'Times New Roman' }}
      />
    </div>
  </div>

  {/* Table */}
  <table className="w-full">
    <thead>
      <tr className="bg-pink-500 text-white font-black text-lg border-b-4 border-yellow-300">
        {['ID', 'Task', 'Assignee', 'Priority', 'Progress'].map((column) => (
          <th
            key={column}
            onClick={() => handleSort(column.toLowerCase())}
            className="p-4 text-left cursor-pointer hover:bg-yellow-300 hover:text-black transition-colors border-r-4 border-yellow-300 last:border-r-0"
            style={{ fontFamily: 'Times New Roman' }}
          >
            <div className="flex items-center gap-2">
              {column}
              {sortField === column.toLowerCase() && (
                sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
              )}
            </div>
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {filteredData.map((item) => (
        <tr
          key={item.id}
          className="bg-purple-600 text-yellow-300 font-bold border-b-4 border-yellow-300 hover:bg-pink-500 transition-colors"
        >
          <td className="p-4 border-r-4 border-yellow-300" style={{ fontFamily: 'Times New Roman' }}>
            {item.id}
          </td>
          <td className="p-4 border-r-4 border-yellow-300" style={{ fontFamily: 'Times New Roman' }}>
            {item.task}
          </td>
          <td className="p-4 border-r-4 border-yellow-300" style={{ fontFamily: 'Times New Roman' }}>
            {item.assignee}
          </td>
          <td className="p-4 border-r-4 border-yellow-300" style={{ fontFamily: 'Times New Roman' }}>
            {item.priority}
          </td>
          <td className="p-4" style={{ fontFamily: 'Times New Roman' }}>
            {item.progress}%
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>`,
    htmlCode: `<!-- Table Container -->
<div class="w-full bounce bg-purple-600 border-8 border-yellow-300 rounded-2xl overflow-hidden">
  <!-- Search -->
  <div class="p-4 bg-pink-500 border-b-4 border-yellow-300">
    <div class="flex items-center gap-2 max-w-md mx-auto">
      <span class="text-white">🔍</span>
      <input
        type="text"
        id="search-input"
        placeholder="Search tasks..."
        class="flex-1 px-4 py-2 bg-purple-600 text-yellow-300 font-bold border-4 border-yellow-300 rounded-2xl placeholder-yellow-300"
        style="font-family: 'Times New Roman';"
        oninput="filterTable()"
      />
    </div>
  </div>

  <!-- Table -->
  <table class="w-full">
    <thead>
      <tr class="bg-pink-500 text-white font-black text-lg border-b-4 border-yellow-300">
        <th class="p-4 text-left cursor-pointer hover:bg-yellow-300 hover:text-black transition-colors border-r-4 border-yellow-300" onclick="sortTable(0)" style="font-family: 'Times New Roman';">
          <div class="flex items-center gap-2">ID ▲</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-yellow-300 hover:text-black transition-colors border-r-4 border-yellow-300" onclick="sortTable(1)" style="font-family: 'Times New Roman';">
          <div class="flex items-center gap-2">Task</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-yellow-300 hover:text-black transition-colors border-r-4 border-yellow-300" onclick="sortTable(2)" style="font-family: 'Times New Roman';">
          <div class="flex items-center gap-2">Assignee</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-yellow-300 hover:text-black transition-colors border-r-4 border-yellow-300" onclick="sortTable(3)" style="font-family: 'Times New Roman';">
          <div class="flex items-center gap-2">Priority</div>
        </th>
        <th class="p-4 text-left cursor-pointer hover:bg-yellow-300 hover:text-black transition-colors" onclick="sortTable(4)" style="font-family: 'Times New Roman';">
          <div class="flex items-center gap-2">Progress</div>
        </th>
      </tr>
    </thead>
    <tbody id="table-body">
      <tr class="bg-purple-600 text-yellow-300 font-bold border-b-4 border-yellow-300 hover:bg-pink-500 transition-colors">
        <td class="p-4 border-r-4 border-yellow-300" style="font-family: 'Times New Roman';">1</td>
        <td class="p-4 border-r-4 border-yellow-300" style="font-family: 'Times New Roman';">Design Homepage</td>
        <td class="p-4 border-r-4 border-yellow-300" style="font-family: 'Times New Roman';">Alice</td>
        <td class="p-4 border-r-4 border-yellow-300" style="font-family: 'Times New Roman';">High</td>
        <td class="p-4" style="font-family: 'Times New Roman';">80%</td>
      </tr>
      <!-- More rows... -->
    </tbody>
  </table>
</div>`,
    cssCode: `.table-bounce {
  width: 100%;
  background-color: #9333ea;
  border: 8px solid #fde047;
  border-radius: 1rem;
  overflow: hidden;
  animation: bounce 0.8s infinite;
}

.table-bounce .search {
  padding: 1rem;
  background-color: #ec4899;
  border-bottom: 4px solid #fde047;
}

.table-bounce .search-input {
  flex: 1;
  padding: 0.5rem 1rem;
  background-color: #9333ea;
  color: #fde047;
  font-weight: 700;
  border: 4px solid #fde047;
  border-radius: 1rem;
  font-family: 'Times New Roman';
}

.table-bounce .search-input::placeholder {
  color: #fde047;
}

.table-bounce table {
  width: 100%;
  border-collapse: collapse;
}

.table-bounce th {
  padding: 1rem;
  background-color: #ec4899;
  color: #ffffff;
  font-weight: 900;
  font-size: 1.125rem;
  text-align: left;
  border-bottom: 4px solid #fde047;
  border-right: 4px solid #fde047;
  cursor: pointer;
  transition: all 0.3s;
  font-family: 'Times New Roman';
}

.table-bounce th:last-child {
  border-right: none;
}

.table-bounce th:hover {
  background-color: #fde047;
  color: #000000;
}

.table-bounce td {
  padding: 1rem;
  background-color: #9333ea;
  color: #fde047;
  font-weight: 700;
  border-bottom: 4px solid #fde047;
  border-right: 4px solid #fde047;
  font-family: 'Times New Roman';
}

.table-bounce td:last-child {
  border-right: none;
}

.table-bounce tr:hover {
  background-color: #ec4899;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}`
  }
};

export function TableSample() {
  const [selectedTable, setSelectedTable] = useState('table1');
  const [viewMode, setViewMode] = useState('preview');
  const [codeLanguage, setCodeLanguage] = useState('react');
  const [styleType, setStyleType] = useState('tailwindcss');
  const [copiedCode, setCopiedCode] = useState(false);
  const [copiedCss, setCopiedCss] = useState(false);
  const [sortField, setSortField] = useState('');
  const [sortDirection, setSortDirection] = useState('asc');
  const [searchTerm, setSearchTerm] = useState('');

  const config = tableConfigs[selectedTable];
  const data = tableData[config.dataType];

  const handleSort = (field) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const sortedAndFilteredData = data
    .filter(item =>
      Object.values(item).some(value =>
        value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    )
    .sort((a, b) => {
      if (!sortField) return 0;
      
      const aValue = a[sortField];
      const bValue = b[sortField];
      
      if (typeof aValue === 'string') {
        return sortDirection === 'asc' 
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      } else {
        return sortDirection === 'asc' 
          ? aValue - bValue
          : bValue - aValue;
      }
    });

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'code') {
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    } else {
      setCopiedCss(true);
      setTimeout(() => setCopiedCss(false), 2000);
    }
  };

  const getCodeToDisplay = () => {
    if (styleType === 'tailwindcss') {
      return codeLanguage === 'react' ? config.reactCode : config.htmlCode;
    } else {
      return codeLanguage === 'react' 
        ? `<div className="table-${selectedTable.slice(-1)}">\n  {/* Table content */}\n</div>`
        : `<div class="table-${selectedTable.slice(-1)}">\n  <!-- Table content -->\n</div>`;
    }
  };

  const renderTable = () => (
    <div 
      className={config.className}
      style={{ 
        fontFamily: config.reactCode.includes('Comic Sans') ? FONTS.COMIC_SANS : 
                 config.reactCode.includes('Papyrus') ? FONTS.PAPYRUS :
                 config.reactCode.includes('Times New Roman') ? FONTS.TIMES_NEW_ROMAN :
                 config.reactCode.includes('Impact') ? FONTS.IMPACT :
                 config.reactCode.includes('Brush Script') ? FONTS.BRUSH_SCRIPT : FONTS.JOKERMAN
      }}
    >
      {/* Search */}
      <div className={`p-4 border-b-4 ${
        selectedTable === 'table1' ? 'bg-yellow-300 border-black' :
        selectedTable === 'table2' ? 'bg-white bg-opacity-80 border-purple-600' :
        'bg-pink-500 border-yellow-300'
      }`}>
        <div className="flex items-center gap-2 max-w-md mx-auto">
          <Search size={20} className={
            selectedTable === 'table1' ? 'text-black' :
            selectedTable === 'table2' ? 'text-black' : 'text-white'
          } />
          <input
            type="text"
            placeholder={
              selectedTable === 'table1' ? 'Search everything...' :
              selectedTable === 'table2' ? 'Find products...' : 'Search tasks...'
            }
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className={`flex-1 px-4 py-2 font-bold border-4 ${
              selectedTable === 'table1' ? 'bg-lime-400 text-black border-black rounded-full placeholder-black' :
              selectedTable === 'table2' ? 'bg-white text-black border-purple-600 rounded-lg placeholder-black' :
              'bg-purple-600 text-yellow-300 border-yellow-300 rounded-2xl placeholder-yellow-300'
            }`}
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full">
        <thead>
          <tr className={config.headerClassName}>
            {config.columns.map((column) => (
              <th
                key={column}
                onClick={() => handleSort(column.toLowerCase())}
                className={`p-4 text-left cursor-pointer transition-colors border-r-4 ${
                  selectedTable === 'table1' ? 'border-black last:border-r-0 hover:bg-red-600 hover:text-white' :
                  selectedTable === 'table2' ? 'border-purple-600 last:border-r-0 hover:bg-purple-600 hover:text-white' :
                  'border-yellow-300 last:border-r-0 hover:bg-yellow-300 hover:text-black'
                }`}
              >
                <div className="flex items-center gap-2">
                  {column}
                  {sortField === column.toLowerCase() && (
                    sortDirection === 'asc' ? <ChevronUp size={16} /> : <ChevronDown size={16} />
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedAndFilteredData.map((item) => (
            <tr
              key={item.id}
              className={config.rowClassName}
            >
              {config.columns.map((column, index) => (
                <td
                  key={column}
                  className={`p-4 border-r-4 ${
                    selectedTable === 'table1' ? 'border-black last:border-r-0' :
                    selectedTable === 'table2' ? 'border-purple-600 last:border-r-0' :
                    'border-yellow-300 last:border-r-0'
                  }`}
                >
                  {column === 'Price' && '$'}
                  {item[config.dataType === 'users' 
                    ? column.toLowerCase() 
                    : config.dataType === 'products'
                    ? column.toLowerCase() === 'product' ? 'name' : column.toLowerCase()
                    : column.toLowerCase() === 'task' ? 'task' : column.toLowerCase()
                  ]}
                  {column === 'Progress' && '%'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="min-h-screen p-4 md:p-8" style={{ 
      background: 'linear-gradient(135deg, #FF00FF 0%, #00FFFF 50%, #FFFF00 100%)',
      fontFamily: FONTS.COMIC_SANS
    }}>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes wobble {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-5px, 5px); }
          40% { transform: translate(-5px, -5px); }
          60% { transform: translate(5px, 5px); }
          80% { transform: translate(5px, -5px); }
          100% { transform: translate(0); }
        }
        @keyframes colorflip {
          0%, 100% { color: #FFFF00; }
          33% { color: #FF00FF; }
          66% { color: #00FFFF; }
        }
        .shake { animation: shake 0.5s infinite; }
        .spin { animation: spin 2s linear infinite; }
        .pulse { animation: pulse 0.5s infinite; }
        .bounce { animation: bounce 0.8s infinite; }
        .wobble { animation: wobble 0.7s infinite; }
        .glitch { animation: glitch 0.4s infinite; }
        .colorflip { animation: colorflip 2s infinite; }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 bg-black/20 p-6 border-8 border-lime-400 transform -rotate-2">
          <h1
            className="text-4xl md:text-6xl font-black mb-4 colorflip"
            style={{ fontFamily: FONTS.COMIC_SANS }}
          >
            📋 DUMBUI TABLES 📋
          </h1>
          <p
            className="text-xl md:text-2xl font-bold"
            style={{ fontFamily: FONTS.TIMES_NEW_ROMAN, color: COLORS.CYAN }}
          >
            The MOST CHAOTIC Data Tables Ever!
          </p>
        </div>

        <div className="mb-6 bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-500 p-4 border-8 border-red-600 transform rotate-1">
          <div className="flex flex-wrap gap-3 justify-center">
            {Object.keys(tableConfigs).map((table) => (
              <button
                key={table}
                onClick={() => {
                  setSelectedTable(table);
                  setSortField('');
                  setSortDirection('asc');
                  setSearchTerm('');
                }}
                className={`px-4 py-2 font-black text-sm md:text-lg border-4 transition-all ${
                  selectedTable === table
                    ? 'bg-lime-400 text-black border-black scale-110 shake'
                    : 'bg-purple-600 text-yellow-300 border-yellow-300 hover:scale-105'
                }`}
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {tableConfigs[table].name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-6 bg-cyan-400 p-4 border-8 border-magenta-600 transform -rotate-1">
          <div className="flex flex-wrap gap-4 justify-center items-center">
            <button
              onClick={() => setViewMode('preview')}
              className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                viewMode === 'preview'
                  ? 'bg-yellow-300 text-black border-black shake'
                  : 'bg-blue-600 text-white border-white hover:bg-blue-700'
              }`}
              style={{ fontFamily: FONTS.COMIC_SANS }}
            >
              👁️ PREVIEW
            </button>
            <button
              onClick={() => setViewMode('code')}
              className={`px-6 py-3 font-black text-lg border-4 transition-all ${
                viewMode === 'code'
                  ? 'bg-yellow-300 text-black border-black shake'
                  : 'bg-blue-600 text-white border-white hover:bg-blue-700'
              }`}
              style={{ fontFamily: FONTS.COMIC_SANS }}
            >
              💻 CODE
            </button>

            <div className="flex gap-2">
              <select
                value={styleType}
                onChange={(e) => setStyleType(e.target.value)}
                className="px-4 py-3 font-black text-lg border-4 border-black bg-lime-400"
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                <option value="tailwindcss">TailwindCSS</option>
                <option value="css">CSS</option>
              </select>

              <select
                value={codeLanguage}
                onChange={(e) => setCodeLanguage(e.target.value)}
                className="px-4 py-3 font-black text-lg border-4 border-black bg-pink-400"
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                <option value="react">React</option>
                <option value="html">HTML</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-purple-600 p-8 border-8 border-yellow-300 transform rotate-1">
          {viewMode === 'preview' ? (
            <div className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-red-500 via-green-500 to-blue-500 border-8 border-cyan-400 p-8">
              <h2
                className="text-3xl font-black mb-8 colorflip"
                style={{ fontFamily: FONTS.PAPYRUS }}
              >
                {config.name}
              </h2>
              
              <div className="w-full max-w-6xl">
                {renderTable()}
              </div>

              <div className="mt-6 text-center">
                <p className="text-white font-bold text-lg" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  Found <span className="text-yellow-300">{sortedAndFilteredData.length}</span> items
                  {searchTerm && ` matching "${searchTerm}"`}
                  {sortField && `, sorted by ${sortField} (${sortDirection})`}
                </p>
                <p className="text-white font-bold text-lg mt-2" style={{ fontFamily: FONTS.COMIC_SANS }}>
                  Click headers to sort, use search to filter!
                </p>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-gray-900 p-4 border-4 border-lime-400 relative">
                <div className="flex justify-between items-center mb-2 pb-2 border-b-2 border-gray-700">
                  <span className="text-yellow-300 font-bold" style={{ fontFamily: FONTS.COMIC_SANS }}>
                    {codeLanguage === 'react' ? '⚛️ REACT CODE' : '🌐 HTML CODE'}
                  </span>
                  <button
                    onClick={() => handleCopy(getCodeToDisplay(), 'code')}
                    className="px-3 py-1 bg-cyan-400 text-black font-bold border-2 border-black hover:bg-cyan-300 flex items-center gap-2"
                    style={{ fontFamily: FONTS.COMIC_SANS }}
                  >
                    <Copy size={16} />
                    {copiedCode ? 'COPIED!' : 'COPY'}
                  </button>
                </div>
                <SyntaxHighlighter
                  language={codeLanguage === 'react' ? 'jsx' : 'html'}
                  style={vscDarkPlus}
                  customStyle={{
                    margin: 0,
                    borderRadius: 0,
                    fontSize: '14px',
                    maxHeight: '400px'
                  }}
                  showLineNumbers
                  wrapLines
                >
                  {getCodeToDisplay()}
                </SyntaxHighlighter>
              </div>

              {styleType === 'css' && (
                <div className="bg-gray-900 p-4 border-4 border-pink-400 relative">
                  <div className="flex justify-between items-center mb-2 pb-2 border-b-2 border-gray-700">
                    <span className="text-pink-300 font-bold" style={{ fontFamily: FONTS.COMIC_SANS }}>
                      🎨 CSS CODE
                    </span>
                    <button
                      onClick={() => handleCopy(config.cssCode, 'css')}
                      className="px-3 py-1 bg-pink-400 text-black font-bold border-2 border-black hover:bg-pink-300 flex items-center gap-2"
                      style={{ fontFamily: FONTS.COMIC_SANS }}
                    >
                      <Copy size={16} />
                      {copiedCss ? 'COPIED!' : 'COPY'}
                    </button>
                  </div>
                  <SyntaxHighlighter
                    language="css"
                    style={vscDarkPlus}
                    customStyle={{
                      margin: 0,
                      borderRadius: 0,
                      fontSize: '14px',
                      maxHeight: '400px'
                    }}
                    showLineNumbers
                    wrapLines
                  >
                    {config.cssCode}
                  </SyntaxHighlighter>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 p-6 border-8 border-green-500 transform -rotate-2">
          <p
            className="text-2xl font-black text-center"
            style={{ fontFamily: FONTS.PAPYRUS, color: '#000' }}
          >
            ⚠️ WARNING: These tables may cause DATA CONFUSION! ⚠️
          </p>
        </div>
      </div>
    </div>
  );
}