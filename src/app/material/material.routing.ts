import {
  Routes
} from '@angular/router';

import {
  AutocompleteDemoComponent
} from './autocomplete/autocomplete-demo';
import {
  ButtonToggleDemoComponent
} from './button-toggle/button-toggle-demo';
import {
  ButtonDemoComponent
} from './button/button-demo';
import {
  CardDemoComponent
} from './card/card-demo';
import {
  CheckboxDemoComponent
} from './checkbox/checkbox-demo';
import {
  ChipsDemoComponent
} from './chips/chips-demo';
import {
  DatepickerDemoComponent
} from './datepicker/datepicker-demo';
import {
  DialogDemoComponent
} from './dialog/dialog-demo';
import {
  DrawerDemoComponent
} from './drawer/drawer-demo';
import {
  ExpansionDemoComponent
} from './expansion/expansion-demo';
import {
  GridListDemoComponent
} from './grid-list/grid-list-demo';
import {
  InputDemoComponent
} from './input/input-demo';
import {
  ListDemoComponent
} from './list/list-demo';
import {
  MenuDemoComponent
} from './menu/menu-demo';
import {
  ProgressBarDemoComponent
} from './progress-bar/progress-bar-demo';
import {
  ProgressSpinnerDemoComponent
} from './progress-spinner/progress-spinner-demo';
import {
  RadioDemoComponent
} from './radio/radio-demo';
import {
  RippleDemoComponent
} from './ripple/ripple-demo';
import {
  SelectDemoComponent
} from './select/select-demo';
import {
  SlideToggleDemoComponent
} from './slide-toggle/slide-toggle-demo';
import {
  SliderDemoComponent
} from './slider/slider-demo';
import {
  SnackBarDemoComponent
} from './snack-bar/snack-bar-demo';
import {
  StepperDemoComponent
} from './stepper/stepper-demo';
import {
  TABS_DEMO_ROUTES
} from './tabs/routes';
import {
  TabsDemoComponent
} from './tabs/tabs-demo';
import {
  ToolbarDemoComponent
} from './toolbar/toolbar-demo';
import {
  TooltipDemoComponent
} from './tooltip/tooltip-demo';
import {
  TypographyDemoComponent
} from './typography/typography-demo';
import {
  TableDemoPageComponent
} from './table/table-demo-page';
import {
  TABLE_DEMO_ROUTES
} from './table/routes';

export const MaterialRoutes: Routes = [{
  path: '',
  children: [{
      path: 'autocomplete',
      component: AutocompleteDemoComponent,
      data: {
        heading: 'Autocomple',
        css: ''
      }
    },
    {
      path: 'button',
      component: ButtonDemoComponent,
      data: {
        heading: 'Button',
        css: ''
      }
    },
    {
      path: 'button-toggle',
      component: ButtonToggleDemoComponent,
      data: {
        heading: 'Button toggle',
        css: ''
      }
    },
    {
      path: 'card',
      component: CardDemoComponent,
      data: {
        heading: 'Card',
        css: ''
      }
    },
    {
      path: 'checkbox',
      component: CheckboxDemoComponent,
      data: {
        heading: 'Checkbox',
        css: ''
      }
    },
    {
      path: 'chips',
      component: ChipsDemoComponent,
      data: {
        heading: 'Chips',
        css: ''
      }
    },
    {
      path: 'datepicker',
      component: DatepickerDemoComponent,
      data: {
        heading: 'Datepicker',
        css: ''
      }
    },
    {
      path: 'dialog',
      component: DialogDemoComponent,
      data: {
        heading: 'Dialog',
        css: ''
      }
    },
    {
      path: 'drawer',
      component: DrawerDemoComponent,
      data: {
        heading: 'Drawer',
        css: ''
      }
    },
    {
      path: 'expansion',
      component: ExpansionDemoComponent,
      data: {
        heading: 'Expansion',
        css: ''
      }
    },
    {
      path: 'grid-list',
      component: GridListDemoComponent,
      data: {
        heading: 'Grid list',
        css: ''
      }
    },
    {
      path: 'input',
      component: InputDemoComponent,
      data: {
        heading: 'Input',
        css: ''
      }
    },
    {
      path: 'list',
      component: ListDemoComponent,
      data: {
        heading: 'List',
        css: ''
      }
    },
    {
      path: 'menu',
      component: MenuDemoComponent,
      data: {
        heading: 'Menu',
        css: ''
      }
    },
    {
      path: 'progress-bar',
      component: ProgressBarDemoComponent,
      data: {
        heading: 'Progress bar',
        css: ''
      }
    },
    {
      path: 'progress-spinner',
      component: ProgressSpinnerDemoComponent,
      data: {
        heading: 'Progress spinner',
        css: ''
      }
    },
    {
      path: 'radio',
      component: RadioDemoComponent,
      data: {
        heading: 'Radio',
        css: ''
      }
    },
    {
      path: 'ripple',
      component: RippleDemoComponent,
      data: {
        heading: 'Ripple',
        css: ''
      }
    },
    {
      path: 'select',
      component: SelectDemoComponent,
      data: {
        heading: 'Select',
        css: ''
      }
    },
    {
      path: 'slide-toggle',
      component: SlideToggleDemoComponent,
      data: {
        heading: 'Slide toggle',
        css: ''
      }
    },
    {
      path: 'slider',
      component: SliderDemoComponent,
      data: {
        heading: 'Slider',
        css: ''
      }
    },
    {
      path: 'snack-bar',
      component: SnackBarDemoComponent,
      data: {
        heading: 'Snackbar',
        css: ''
      }
    },
    {
      path: 'stepper',
      component: StepperDemoComponent,
      data: {
        heading: 'Stepper',
        css: ''
      }
    },
    {
      path: 'table',
      component: TableDemoPageComponent,
      children: TABLE_DEMO_ROUTES,
      data: {
        heading: 'Table',
        css: ''
      }
    },
    {
      path: 'tabs',
      component: TabsDemoComponent,
      children: TABS_DEMO_ROUTES,
      data: {
        heading: 'Tabs',
        css: ''
      }
    },
    {
      path: 'toolbar',
      component: ToolbarDemoComponent,
      data: {
        heading: 'Toolbar',
        css: ''
      }
    },
    {
      path: 'tooltip',
      component: TooltipDemoComponent,
      data: {
        heading: 'Tooltip',
        css: ''
      }
    },
    {
      path: 'typography',
      component: TypographyDemoComponent,
      data: {
        heading: 'Typography',
        css: ''
      }
    },
    {
      path: 'expansion',
      component: ExpansionDemoComponent,
      data: {
        heading: 'Expansion',
        css: ''
      }
    },
    {
      path: 'stepper',
      component: StepperDemoComponent,
      data: {
        heading: 'Stepper',
        css: ''
      }
    },
  ]
}];
