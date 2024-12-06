import React, {
    Component,
    type HTMLAttributes,
    type KeyboardEvent,
    type SyntheticEvent,
} from 'react';
import PropTypes from 'prop-types';
import { type Moment } from 'moment';
import { type ClassPropsWithDefault } from '../util';
import { checkDateValue } from './util';
import type { WeekPickerProps, WeekPickerState } from './types';
type InnerWeekPickerProps = ClassPropsWithDefault<WeekPickerProps, typeof WeekPicker.defaultProps>;
/**
 * DatePicker.WeekPicker
 */
declare class WeekPicker extends Component<WeekPickerProps, WeekPickerState> {
    static displayName: string;
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
        disabledDate: PropTypes.Requireable<(...args: any[]) => any>;
        footerRender: PropTypes.Requireable<(...args: any[]) => any>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
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
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
        yearCellRender: PropTypes.Requireable<(...args: any[]) => any>;
        locale: PropTypes.Requireable<object>;
        className: PropTypes.Requireable<string>;
        name: PropTypes.Requireable<string>;
        popupComponent: PropTypes.Requireable<PropTypes.ReactComponentLike>;
        popupContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
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
    };
    readonly props: InnerWeekPickerProps;
    constructor(props: WeekPickerProps);
    static getDerivedStateFromProps(props: InnerWeekPickerProps): Partial<WeekPickerState>;
    handleChange: (newValue: Moment | null, prevValue: Moment | null) => void;
    onDateInputChange: (value: Moment | null, e: SyntheticEvent, eventType: string) => void;
    onKeyDown: (e: KeyboardEvent) => void;
    onVisibleChange: (visible: boolean, type: string) => void;
    onSelectCalendarPanel: (value: Moment | null) => void;
    renderPreview(others: HTMLAttributes<HTMLDivElement>): React.JSX.Element;
    dateRender: (value: Moment) => React.ReactNode;
    render(): React.JSX.Element;
}
declare const _default: typeof WeekPicker;
export default _default;
