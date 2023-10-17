import { NestedTreeControl } from '@angular/cdk/tree';
import { Component } from '@angular/core';
import { MatTreeNestedDataSource } from '@angular/material/tree';

interface FoodNode {
    name: string;
    children?: FoodNode[];
}

const TREE_DATA: FoodNode[] = [
    {
        name: 'Fruit',
        children: [
            { name: 'Apple' },
            { name: 'Banana' },
            { name: 'Fruit loops' },
        ],
    },
    {
        name: 'Vegetables',
        children: [
            {
                name: 'Green',
                children: [{ name: 'Broccoli' }, { name: 'Brussels sprouts' }],
            },
            {
                name: 'Orange',
                children: [{ name: 'Pumpkins' }, { name: 'Carrots' }],
            },
        ],
    },
];

@Component({
    selector: 'app-admin-nav-widget',
    templateUrl: './admin-nav-widget.component.html',
    styleUrls: ['./admin-nav-widget.component.scss'],
})
export class AdminNavWidgetComponent {
    public treeControl = new NestedTreeControl<FoodNode>(node => node.children);
    public dataSource = new MatTreeNestedDataSource<FoodNode>();

    constructor() {
        this.dataSource.data = TREE_DATA;
    }

    public hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;
}
