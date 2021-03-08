// Type definitions for react-add-to-calendar 0.1
// Project: https://github.com/jasonsalzman/react-add-to-calendar
// Definitions by: Konstantin Lebedev <https://github.com/koss-lebedev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import * as React from "react";

export interface Recurring {
  repeat: string;
  interval?: number;
  weekStart?: string;
  count?: number;
  byDay?: number | string;
  byMonth?: number | string;
}

export interface AddToCalendarEvent {
  title?: string;
  description?: string;
  location?: string;
  startTime?: string | Date;
  endTime?: string | Date;
  recurring?: string | Recurring;
}

export interface AddToCalendarProps {
  buttonClassClosed?: string;
  buttonClassOpen?: string;
  buttonLabel?: string;
  buttonTemplate?: any;
  buttonIconClass?: string;
  useFontAwesomeIcons?: boolean;
  buttonWrapperClass?: string;
  buttonElement?: React.ComponentType<any>;
  displayItemIcons?: boolean;
  optionsOpen?: boolean;
  dropdownClass?: string;
  event: AddToCalendarEvent;
  listElement?: React.ComponentType<any>;
  listItemElement?: React.ComponentType<any>;
  listItems?: any[];
  listItemsIcon?: any[];
  rootClass?: string;
  toggleDropdown: (showOptions: boolean, target?: HTMLElement) => void;
}

declare const ReactAddToCalendar: React.ComponentClass<AddToCalendarProps>;

export default ReactAddToCalendar;
