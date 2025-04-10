import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

function TableFooter() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
  return (
    <div className="relative">
      {/* Dropdown menu */}
      {isDropdownOpen && (
        <div className="absolute bottom-full left-0 mb-1 w-56 rounded-md border bg-white shadow-lg">
          <div className="p-3 font-medium">Super Admin</div>
          <div className="px-3 py-1">
            <span className="inline-flex items-center rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800">
              <span className="mr-1 h-1.5 w-1.5 rounded-full bg-green-500"></span>
              Active
            </span>
          </div>
          <div className="mt-2 border-t">
            <div className="p-3 text-sm hover:bg-gray-50">Permission Level Two</div>
            <div className="border-t p-3 text-sm hover:bg-gray-50">Permission Level Three</div>
            <div className="border-t p-3 text-sm hover:bg-gray-50">Permission Level Four</div>
          </div>
        </div>
      )}
      
      {/* Footer bar */}
      <div className="flex items-center mt-6  gap-4 border-t">
        <div className="text-sm font-normal flex md:gap-1 gap-0.5  border px-2 md:px-6 py-3 rounded-lg ">
          <span className="text-[#36A955]">Role:</span>
          <button 
            className="text-sm font-normal flex items-center md:gap-1"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Super Admin
            {isDropdownOpen ? (
              <ChevronUp className="h-4 w-4" />
            ) : (
              <ChevronDown className="h-4 w-4" />
            )}
          </button>
        </div>
        <div className="text-sm max-w-[200px] md:max-w-full ">
          Last login: Tue, 14 November 2023
        </div>
      </div>
    </div>
  );
}

export default TableFooter;