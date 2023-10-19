import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { INestedTreeNode } from '../../models/INestedTreeNode';


@Component({
    selector: 'app-admin-nested-tree-ui',
    templateUrl: './admin-nested-tree-ui.component.html',
    styleUrls: ['./admin-nested-tree-ui.component.scss'],
})
export class AdminNestedTreeUiComponent implements OnChanges {
    @Input() hasChild: (_: number, node: INestedTreeNode) => boolean;
    @Input() nodes: INestedTreeNode[] | null;

    public treeControl = new NestedTreeControl<INestedTreeNode>(node => node.children);
    public dataSource = new MatTreeNestedDataSource<INestedTreeNode>();

    public ngOnChanges(changes: SimpleChanges): void {
        if (!changes['nodes']) return;
        this.dataSource.data = changes['nodes'].currentValue;
    }
}
