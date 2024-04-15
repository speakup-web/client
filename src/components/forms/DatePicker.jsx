import { useEffect, useState } from 'react';
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
} from '@material-tailwind/react';
import { format } from 'date-fns';
import { id as localeID } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

export const DatePicker = (props) => {
  const { label, id, setValue } = props;
  const [date, setDate] = useState(new Date(2024, 0, 1));

  useEffect(() => {
    setValue(format(date, 'yyyy-MM-dd'));
  }, [date]);

  return (
    <div className="flex flex-col w-full gap-2">
      <div className="flex justify-between">
        <label
          htmlFor={id}
          className="mb-2 text-sm font-medium text-blue-400 dark:text-blue-400 ml-1"
        >
          {label}
        </label>
      </div>
      <Popover placement="top">
        <PopoverHandler>
          <Input
            value={format(date, 'PPPP', { locale: localeID })}
            placeholder="Masukkan tanggal kejadian"
            className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:border-blue-300 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500"
            readOnly
          />
        </PopoverHandler>
        <PopoverContent>
          <DayPicker
            mode="single"
            placeholder="Pilih tanggal Kejadian"
            selected={date}
            onSelect={(value) => {
              setDate(value);
            }}
            showOutsideDays
            classNames={{
              caption: 'flex justify-center py-2 mb-4 relative items-center',
              caption_label: 'text-sm font-medium text-gray-900',
              nav: 'flex items-center',
              nav_button:
                'h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300',
              nav_button_previous: 'absolute left-1.5',
              nav_button_next: 'absolute right-1.5',
              table: 'w-full border-collapse',
              head_row: 'flex font-medium primaryBlue',
              head_cell: 'm-0.5 w-9 roboto-medium text-sm',
              row: 'flex w-full mt-2',
              cell: 'text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20',
              day: 'h-9 w-9 p-0 font-normal',
              day_range_end: 'day-range-end',
              day_selected:
                'rounded-md bg-primaryBlue text-white hover:bg-darkBlue hover:text-white focus:bg-primaryBlue focus:text-white',
              day_today: 'rounded-md bg-babyBlue text-gray-900',
              day_outside:
                'day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10',
              day_disabled: 'text-gray-500 opacity-50',
              day_hidden: 'invisible',
            }}
            components={{
              IconLeft: ({ ...props }) => (
                <HiChevronLeft {...props} className="h-4 w-4" />
              ),
              IconRight: ({ ...props }) => (
                <HiChevronRight {...props} className="h-4 w-4" />
              ),
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
};
