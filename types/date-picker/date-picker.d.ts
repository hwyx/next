import React, { Component, type HTMLAttributes, type KeyboardEvent, type UIEvent } from 'react';
import PropTypes from 'prop-types';
import moment, { type Moment } from 'moment';
import { type ClassPropsWithDefault } from '../util';
import { checkDateValue } from './util';
import type { DatePickerProps, DatePickerState } from './types';
type InnerDatePickerProps = ClassPropsWithDefault<DatePickerProps, typeof DatePicker.defaultProps>;
/**
 * DatePicker
 */
declare class DatePicker extends Component<DatePickerProps, DatePickerState> {
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        rtl: PropTypes.Requireable<boolean>;
        label: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        state: PropTypes.Requireable<string>;
        placeholder: PropTypes.Requireable<string>;
        defaultVisibleMonth: PropTypes.Requireable<(...args: any[]) => any>;
        onVisibleMonthChange: PropTypes.Requireable<(...args: any[]) => any>;
        value: typeof checkDateValue;
        defaultValue: typeof checkDateValue;
        format: PropTypes.Requireable<string>;
        showTime: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        resetTime: PropTypes.Requireable<boolean>;
        disabledDate: PropTypes.Requireable<(...args: any[]) => any>;
        footerRender: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onOk: PropTypes.Requireable<(...args: any[]) => any>;
        size: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        hasClear: PropTypes.Requireable<boolean>;
        visible: PropTypes.Requireable<boolean>;
        defaultVisible: PropTypes.Requireable<boolean>;
        onVisibleChange: PropTypes.Requireable<(...args: any[]) => any>;
        popupTriggerType: PropTypes.Requireable<string>;
        popupAlign: PropTypes.Requireable<string>;
        popupContainer: PropTypes.Requireable<any>;
        popupStyle: PropTypes.Requireable<object>;
        popupClassName: PropTypes.Requireable<string>;
        popupProps: PropTypes.Requireable<object>;
        followTrigger: PropTypes.Requireable<boolean>;
        inputProps: PropTypes.Requireable<object>;
        dateCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        monthCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        yearCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        dateInputAriaLabel: PropTypes.Requireable<string>;
        timeInputAriaLabel: PropTypes.Requireable<string>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        name: PropTypes.Requireable<string>;
        popupComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        popupContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        disableChangeMode: PropTypes.Requireable<boolean>;
        yearRange: PropTypes.Requireable<(number | null | undefined)[]>;
        defaultPropsConfig: PropTypes.Requireable<object>;
        errorBoundary: PropTypes.Requireable<NonNullable<boolean | object | null | undefined>>;
        pure: PropTypes.Requireable<boolean>;
        warning: PropTypes.Requireable<boolean>;
        device: PropTypes.Requireable<string>;
        children: PropTypes.Requireable<any>;
    };
    static defaultProps: {
        prefix: string;
        rtl: boolean;
        format: string;
        size: string;
        showTime: boolean;
        resetTime: boolean;
        disabledDate: () => boolean;
        footerRender: () => null;
        hasClear: boolean;
        popupTriggerType: string;
        popupAlign: string;
        locale: Partial<{
            placeholder: string;
            datetimePlaceholder: string;
            monthPlaceholder: string;
            weekPlaceholder: string;
            yearPlaceholder: string;
            now: string;
            selectTime: string;
            selectDate: string;
            ok: string;
            clear: string;
            startPlaceholder: string;
            endPlaceholder: string;
            hour: string;
            minute: string;
            second: string;
            monthBeforeYear?: boolean | undefined;
        }> & {
            momentLocale?: string | undefined;
        };
        defaultVisible: boolean;
        onChange: () => void;
        onVisibleChange: () => void;
        onOk: () => void;
    };
    static displayName: string;
    readonly props: InnerDatePickerProps;
    constructor(props: DatePickerProps);
    static getDerivedStateFromProps(props: InnerDatePickerProps): {
        format: string | undefined;
        timeFormat: string;
        dateTimeFormat: string | undefined;
        value?: moment.Moment | null | undefined;
        inputAsString?: boolean | undefined;
        dateInputStr?: string | undefined;
        timeInputStr?: string | undefined;
        inputing?: false | 'time' | 'date' | undefined;
        visible?: boolean | undefined;
        panel?: import('./types').PanelType | undefined;
    };
    onValueChange: (newValue: Moment | null, handler?: 'onOk' | 'onChange') => void;
    onSelectCalendarPanel: (value: Moment) => void;
    onSelectTimePanel: (value: Moment) => void;
    clearValue: () => void;
    onDateInputChange: (
        inputStr: string | null | undefined,
        e: UIEvent,
        eventType?: string
    ) => void;
    onTimeInputChange: (inputStr: string) => void;
    onDateInputBlur: () => void;
    onTimeInputBlur: () => void;
    onKeyDown: (e: KeyboardEvent) => void;
    onTimeKeyDown: (e: KeyboardEvent) => void;
    handleChange: (newValue: Moment | null, prevValue: Moment | null, others?: {}) => void;
    onFoucsDateInput: () => void;
    onFoucsTimeInput: () => void;
    onVisibleChange: (visible: boolean, type: string) => void;
    changePanel: (panel: DatePickerState['panel']) => void;
    onOk: (value?: Moment | null) => void;
    renderPreview(others: HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    render(): React.JSX.Element;
}
declare const _default: typeof DatePicker;
export default _default;
