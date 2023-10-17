import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, Input } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
    name: string;
    children?: FoodNode[];
}

@Component({
    selector: 'app-admin-nested-tree-ui',
    templateUrl: './admin-nested-tree-ui.component.html',
    styleUrls: ['./admin-nested-tree-ui.component.scss'],
})
export class AdminNestedTreeUiComponent {
    @Input() dataSource: MatTreeNestedDataSource<FoodNode>;
    @Input() treeControl: NestedTreeControl<FoodNode>
    @Input() hasChild: (_: number, node: FoodNode) => boolean;
}
