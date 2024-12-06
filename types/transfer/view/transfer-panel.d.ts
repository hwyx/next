import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Menu from '../../menu';
import type {
    PositionType,
    TransferDataItem,
    TransferPanelProps,
    TransferPanelState,
} from '../types';
type ListRef = HTMLDivElement | React.ComponentRef<typeof Menu> | null;
export default class TransferPanel extends Component<TransferPanelProps, TransferPanelState> {
    footerId: string;
    headerId: string;
    firstRender: boolean;
    searched: boolean;
    list: ListRef;
    enabledDatasource: TransferDataItem[];
    static propTypes: {
        prefix: PropTypes.Requireable<string>;
        position: PropTypes.Requireable<string>;
        mode: PropTypes.Requireable<string>;
        dataSource: PropTypes.Requireable<any[]>;
        value: PropTypes.Requireable<any[]>;
        onChange: PropTypes.Requireable<(...args: any[]) => any>;
        onMove: PropTypes.Requireable<(...args: any[]) => any>;
        onMoveAll: PropTypes.Requireable<(...args: any[]) => any>;
        disabled: PropTypes.Requireable<boolean>;
        locale: PropTypes.Requireable<object>;
        title: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        showSearch: PropTypes.Requireable<boolean>;
        searchProps: PropTypes.Requireable<object>;
        filter: PropTypes.Requireable<(...args: any[]) => any>;
        onSearch: PropTypes.Requireable<(...args: any[]) => any>;
        searchPlaceholder: PropTypes.Requireable<string>;
        notFoundContent: PropTypes.Requireable<PropTypes.ReactNodeLike>;
        listClassName: PropTypes.Requireable<string>;
        listStyle: PropTypes.Requireable<object>;
        itemRender: PropTypes.Requireable<(...args: any[]) => any>;
        sortable: PropTypes.Requireable<boolean>;
        onSort: PropTypes.Requireable<(...args: any[]) => any>;
        baseId: PropTypes.Requireable<string>;
        customerList: PropTypes.Requireable<(...args: any[]) => any>;
        useVirtual: PropTypes.Requireable<boolean>;
        showCheckAll: PropTypes.Requireable<boolean>;
    };
    constructor(props: TransferPanelProps, context: unknown);
    componentDidMount(): void;
    componentDidUpdate(prevProps: TransferPanelProps): void;
    getListDOM(ref: ListRef): void;
    getListData(dataSource: TransferDataItem[], disableHighlight?: boolean): React.JSX.Element[];
    handleAllCheck(allChecked: boolean): void;
    handleCheck(itemValue: string, checked: boolean): void;
    handleSearch(searchedValue: string): void;
    handleItemDragStart(position: PositionType, value: string): void;
    handleItemDragOver(value: string): void;
    handleItemDragEnd(): void;
    handleItemDrop(...args: Parameters<Required<TransferPanelProps>['onSort']>): void;
    renderHeader(): React.JSX.Element;
    renderSearch(): React.JSX.Element;
    renderList(dataSource: TransferDataItem[]): React.JSX.Element;
    renderNotFoundContent(): React.JSX.Element;
    renderFooter(): React.JSX.Element;
    render(): React.JSX.Element;
}
export {};
