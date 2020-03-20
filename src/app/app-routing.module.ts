import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {BaseLayoutComponent} from './Layout/base-layout/base-layout.component';
import {PagesLayoutComponent} from './Layout/pages-layout/pages-layout.component';

//layout
import { SellerLayoutComponent } from './Layout/seller-layout/seller-layout.component';
import { SellersidebarComponent } from './Layout/Components/sellersidebar/sellersidebar.component';

// DEMO PAGES

// Dashboards

import {AnalyticsComponent} from './DemoPages/Dashboards/analytics/analytics.component';

// Pages

import {ForgotPasswordBoxedComponent} from './DemoPages/UserPages/forgot-password-boxed/forgot-password-boxed.component';
import {LoginBoxedComponent} from './DemoPages/UserPages/login-boxed/login-boxed.component';
import {RegisterBoxedComponent} from './DemoPages/UserPages/register-boxed/register-boxed.component';

// Elements

import {StandardComponent} from './DemoPages/Elements/Buttons/standard/standard.component';
import {DropdownsComponent} from './DemoPages/Elements/dropdowns/dropdowns.component';
import {CardsComponent} from './DemoPages/Elements/cards/cards.component';
import {ListGroupsComponent} from './DemoPages/Elements/list-groups/list-groups.component';
import {TimelineComponent} from './DemoPages/Elements/timeline/timeline.component';
import {IconsComponent} from './DemoPages/Elements/icons/icons.component';

// Components

import {AccordionsComponent} from './DemoPages/Components/accordions/accordions.component';
import {TabsComponent} from './DemoPages/Components/tabs/tabs.component';
import {CarouselComponent} from './DemoPages/Components/carousel/carousel.component';
import {ModalsComponent} from './DemoPages/Components/modals/modals.component';
import {ProgressBarComponent} from './DemoPages/Components/progress-bar/progress-bar.component';
import {PaginationComponent} from './DemoPages/Components/pagination/pagination.component';
import {TooltipsPopoversComponent} from './DemoPages/Components/tooltips-popovers/tooltips-popovers.component';

// Tables

import {TablesMainComponent} from './DemoPages/Tables/tables-main/tables-main.component';

// Widgets

import {ChartBoxes3Component} from './DemoPages/Widgets/chart-boxes3/chart-boxes3.component';

// Forms Elements

import {ControlsComponent} from './DemoPages/Forms/Elements/controls/controls.component';
import {LayoutComponent} from './DemoPages/Forms/Elements/layout/layout.component';

// Charts

import {ChartjsComponent} from './DemoPages/Charts/chartjs/chartjs.component';
import { AddproductComponent } from './DemoPages/Elements/addproduct/addproduct.component';
import { ViewproductComponent } from './Demopages/Elements/viewproduct/viewproduct.component';
import { AddofferComponent } from './Demopages/Elements/addoffer/addoffer.component';
import { ViewofferComponent } from './DemoPages/Elements/viewoffer/viewoffer.component';
import { EditofferComponent } from './Demopages/Elements/editoffer/editoffer.component';
import { EditproductComponent } from './DemoPages/Elements/editproduct/editproduct.component';
import { DisplaysellerComponent } from './DemoPages/Elements/displayseller/displayseller.component';
import { AddproductbyreactiveComponent } from './DemoPages/Elements/addproductbyreactive/addproductbyreactive.component';
import { ViewproductbyreactiveComponent } from './DemoPages/Elements/viewproductbyreactive/viewproductbyreactive.component';
import { EditproductbyreactiveComponent } from './DemoPages/Elements/editproductbyreactive/editproductbyreactive.component';


const routes: Routes = [
  
  {path:'',component:LoginBoxedComponent},
  {path:'pages/login-boxed',component:LoginBoxedComponent},
  {path:'pages/register-boxed',component:RegisterBoxedComponent},
 
 
  {path:'sellerlayout',component:SellerLayoutComponent,
  children: [

    // Dashboads

     {path: '', component: AnalyticsComponent, data: {extraParameter: 'dashboardsMenu'}},

    // Elements

    {path: 'addproduct', component: AddproductComponent , data: {extraParameter: 'elementsMenu'}},
    {path:'viewproduct',component:ViewproductComponent, data: {extraParameter: 'elementsMenu'}},
    {path:'addoffer',component:AddofferComponent, data: {extraParameter: 'elementsMenu'}},
    {path:'viewoffer', component:ViewofferComponent, data: {extraParameter: 'elementsMenu'}}, 
    {path:'editoffer',component:EditofferComponent, data: {extraParameter: 'elementsMenu'}},
    {path:'editproduct', component:EditproductComponent, data: {extraParameter: 'elementsMenu'}},
    {path:'editproductbyreactive', component:EditproductbyreactiveComponent, data: {extraParameter: 'elementsMenu'}},
    {path:'addproductbyreactive',component:AddproductbyreactiveComponent, data: {extraParameter: 'elementsMenu'}},
    {path:'viewproductbyreactive', component:ViewproductbyreactiveComponent, data: {extraParameter: 'elementsMenu'}},
    
  //  Tables

    {path: 'tables/bootstrap', component: TablesMainComponent, data: {extraParameter: 'tablesMenu'}},

    // Widgets

    {path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: {extraParameter: 'pagesMenu3'}},

    // Forms Elements

    {path: 'forms/controls', component: ControlsComponent, data: {extraParameter: 'formElementsMenu'}},
    {path: 'forms/layouts', component: LayoutComponent, data: {extraParameter: 'formElementsMenu'}},

    // Charts

    {path: 'charts/chartjs', component: ChartjsComponent, data: {extraParameter: ''}},

  ]


},
  
  {path: 'BaseLayoutComponent',component: BaseLayoutComponent,
  
    children: [

      // Dashboads

      {path: '', component: AnalyticsComponent, data: {extraParameter: 'dashboardsMenu'}},
     

      // Elements

      {path: 'buttons-standard', component: StandardComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'dropdowns', component: DropdownsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'icons', component: IconsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'cards', component: CardsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'list-group', component: ListGroupsComponent, data: {extraParameter: 'elementsMenu'}},
      {path: 'timeline', component: TimelineComponent, data: {extraParameter: 'elementsMenu'}},
      {path:'displayseller', component:DisplaysellerComponent,data:{extraParameter:'elementsMenu'}},

      // Components

      {path: 'components/tabs', component: TabsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/accordions', component: AccordionsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/modals', component: ModalsComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/progress-bar', component: ProgressBarComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/tooltips-popovers', component: TooltipsPopoversComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/carousel', component: CarouselComponent, data: {extraParameter: 'componentsMenu'}},
      {path: 'components/pagination', component: PaginationComponent, data: {extraParameter: 'componentsMenu'}},

      // Tables

      {path: 'tables/bootstrap', component: TablesMainComponent, data: {extraParameter: 'tablesMenu'}},

      // Widgets

      {path: 'widgets/chart-boxes-3', component: ChartBoxes3Component, data: {extraParameter: 'pagesMenu3'}},

      // Forms Elements

      {path: 'forms/controls', component: ControlsComponent, data: {extraParameter: 'formElementsMenu'}},
      {path: 'forms/layouts', component: LayoutComponent, data: {extraParameter: 'formElementsMenu'}},

      // Charts

      {path: 'charts/chartjs', component: ChartjsComponent, data: {extraParameter: ''}},

    ]

  },

  {
    path: '',
    component: PagesLayoutComponent,
    children: [


      // User Pages
        
      {path: 'pages/login-boxed', component: LoginBoxedComponent, data: {extraParameter: ''}},
      {path: 'pages/register-boxed', component: RegisterBoxedComponent, data: {extraParameter: ''}},
      {path: 'pages/forgot-password-boxed', component: ForgotPasswordBoxedComponent, data: {extraParameter: ''}},
     
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
