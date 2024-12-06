import React from 'react';
import PropTypes from 'prop-types';
import { events, type ClassPropsWithDefault } from '../../util';
import type { RangeProps, RangeState, RangeValueType } from '../types';
type RangePropsWithDefault = ClassPropsWithDefault<RangeProps, typeof Range.defaultProps>;
type EventOnReturnType = ReturnType<typeof events.on>;
declare class Range extends React.Component<RangeProps, RangeState> {
    static displayName: string;
    static contextTypes: {
        prefix: PropTypes.Requireable<string>;
    };
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        className: PropTypes.Requireable<string>;
        style: PropTypes.Requireable<object>;
        slider: PropTypes.Requireable<string>;
        min: PropTypes.Requireable<number>;
        max: PropTypes.Requireable<number>;
        step: PropTypes.Requireable<number>;
        value: PropTypes.Requireable<
            NonNullable<number | (number | null | undefined)[] | null | undefined>
        >;
        tempValue: PropTypes.Requireable<
            NonNullable<number | (number | null | undefined)[] | null | undefined>
        >;
        defaultValue: PropTypes.Requireable<
            NonNullable<number | (number | null | undefined)[] | null | undefined>
        >;
        marks: PropTypes.Requireable<NonNullable<number | boolean | object | null | undefined>>;
        marksPosition: PropTypes.Requireable<string>;
        disabled: PropTypes.Requireable<boolean>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onProcess: PropTypes.Requireable<(...args: any[]) => any>;
        hasTip: PropTypes.Requireable<boolean>;
        tipRender: PropTypes.Requireable<(...args: any[]) => any>;
        id: PropTypes.Requireable<string>;
        reverse: PropTypes.Requireable<boolean>;
        pure: PropTypes.Requireable<boolean>;
        fixedWidth: PropTypes.Requireable<boolean>;
        tooltipVisible: PropTypes.Requireable<boolean>;
        rtl: PropTypes.Requireable<boolean>;
        isPreview: PropTypes.Requireable<boolean>;
        renderPreview: PropTypes.Requireable<(...args: any[]) => any>;
    };
    static defaultProps: {
        prefix: string;
        slider: string;
        min: number;
        max: number;
        step: number;
        marks: boolean;
        disabled: boolean;
        fixedWidth: boolean;
        tooltipVisible: boolean;
        hasTip: boolean;
        onChange: () => void;
        onProcess: () => void;
        tipRender: (value: RangeValueType) => RangeValueType;
        reverse: boolean;
        pure: boolean;
        marksPosition: string;
        rtl: boolean;
        isPreview: boolean;
    };
    _moving: {
        start: number;
        end: number;
        startValue: RangeState['tempValue'];
        dragging?: 'lower' | 'upper';
    } | null;
    dom: HTMLDivElement;
    isFixedWidth: boolean;
    lastPosition: number;
    oldDragging?: 'lower' | 'upper';
    _onMouseMoveListener: EventOnReturnType | null;
    _onMouseUpListener: EventOnReturnType | null;
    _onContextMenuListener: EventOnReturnType | null;
    _onTouchMoveListener: EventOnReturnType | null;
    _onTouchEndListener: EventOnReturnType | null;
    readonly props: RangePropsWithDefault;
    constructor(props: RangeProps);
    static getDerivedStateFromProps(
        props: RangePropsWithDefault,
        state: RangeState
    ): Partial<RangeState> | null;
    _marksToScales(marks: RangePropsWithDefault['marks']): number | false | number[];
    _calcScales(): number[];
    _calcMarks(): Record<number, string>;
    _onMouseDown(e: React.MouseEvent<HTMLDivElement>): void;
    _onTouchStart(e: React.TouchEvent<HTMLDivElement>): void;
    onKeyDown(e: React.KeyboardEvent<HTMLDivElement>): void;
    _onContextMenu(e: React.MouseEvent<HTMLDivElement>): void;
    _start(position: number): void;
    _end(): void;
    _move(e: React.MouseEvent<Element> | React.TouchEvent<Element>): void;
    _onProcess(position: number, start?: boolean): void;
    _addDocumentMouseEvents(): void;
    _addDocumentTouchEvents(): void;
    _removeDocumentEvents(): void;
    _positionToCurrent(position: number): number;
    _currentToValue(
        current: number,
        preValue: number | [number, number],
        lastPosition: number,
        isFixedWidth: boolean
    ): RangeValueType | undefined;
    handleLowerTooltipVisibleChange(visible: boolean): void;
    handleUpperTooltipVisibleChange(visible: boolean): void;
    render(): React.JSX.Element;
}
declare const _default: typeof Range;
export default _default;
