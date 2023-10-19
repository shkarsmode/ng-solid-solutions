import { Component } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { INestedTreeNode } from '../../models/INestedTreeNode';

const TREE_DATA: INestedTreeNode[] = [
    {
        name: 'Contents',
        children: [
            { 
                name: 'Pages',
                href: '/admin/grid/content/pages' 
            },
            { 
                name: 'Posts',
                href: '/admin/grid/content/posts' 
            },
            { 
                name: 'Comments',
                href: '/admin/grid/content/comments'
            },
        ],
    },
    {
        name: 'Users',
        icon: 'perm_identity',
        children: [
            { 
                name: 'Admin',
                icon: 'manage_accounts',
                href: '/admin/grid/accounts/admins'
            },
            { 
                name: 'Users',
                icon: 'face',
                href: '/admin/grid/accounts/users'
            }
        ],
    },
    {
        name: 'Settings',
        icon: 'settings',
        children: [
            { 
                name: 'General',
                href: '/admin/form/settings/general'
            }, 
            { 
                name: 'Catalog',
                href: '/admin/form/settings/catalog'
            }
        ]
    }
];

@Component({
    selector: 'app-admin-nav-widget',
    templateUrl: './admin-nav-widget.component.html',
    styleUrls: ['./admin-nav-widget.component.scss'],
})
export class AdminNavWidgetComponent {
    public data: Observable<INestedTreeNode[]> = of<INestedTreeNode[]>(TREE_DATA).pipe(delay(500));

    constructor() {}

    public hasChild = (_: number, node: INestedTreeNode) => 
        !!node.children && node.children.length > 0;
}
