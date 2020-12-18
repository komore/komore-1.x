import { NestedTreeControl } from '@angular/cdk/tree';
import { Component, HostBinding, Input } from '@angular/core';
import { NavigationItemModel } from './navigation-item.model';

/**
 * Navigation component
 */
@Component({
  selector: 'komore-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {
  @Input()
  @HostBinding('class.expanded')
  readonly expanded = false;
  @Input()
  readonly navigationItems: ReadonlyArray<NavigationItemModel> = [];

  readonly treeControl = new NestedTreeControl<NavigationItemModel>(navigationItem =>
    navigationItem.children ? [...navigationItem.children] : []
  );

  /**
   * Tests whether a tree node has child nodes
   * @param _ Index
   * @param navigationItem Navigation item
   * @returns true if the tree node has child nodes
   */
  hasChildNodes(_: number, navigationItem: NavigationItemModel): boolean {
    return !!navigationItem.children;
  }
}
