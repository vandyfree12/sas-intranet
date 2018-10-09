import { Injectable } from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  name: string;
  type?: string;
}

export interface Menu {
  state?: string;
  name?: string;
  type: string;
  icon?: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

const MENUITEMS = [
  {
    type: 'title',
    name: 'MAIN'
  },
  {
    state: '/',
    name: 'Dashboard',
    type: 'link',
    icon: ''
  },
  {
    state: 'myfeed',
    name: 'My Feed',
    type: 'link',
    icon: ''
  },
  {
    state: 'posts',
    name: 'Posts',
    type: 'link',
    icon: ''
  },
   
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'COMMUNITY'
  },
  {
    state: 'social',
    name: 'People',
    type: 'link',
    icon: ''
  },
  {
    state: 'social',
    name: 'Forums',
    type: 'link',
    icon: ''
  },

  {
    state: 'groups',
    name: 'All Groups',
    type: 'sub',
    icon: '',
    children: [
      {state: 'signin', name: 'HR Corner '},
      {state: 'signup', name: 'News'},
      {state: 'forgot', name: 'Events'},
      {state: 'forgot', name: 'Sports'},
      //{state: 'lockscreen', name: 'LOCKSCREEN'},
    ]
  },

  {
    state: 'social',
    name: 'Daily Stocks',
    type: 'link',
    icon: ''
  },

  // {
  //   state: 'activity',
  //   name: 'Site-wide Activity',
  //   type: 'link',
  //   icon: ''
  // },



  // {
  //   state: 'groups',
  //   name: 'Groups',
  //   type: 'link',
  //   icon: '',
  // },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'APPlICATIONS'
  },
  {
    state: 'calendar',
    name: 'Calendar',
    type: 'link',
    icon: 'today'
  },



  

  {
    state: 'tables',
    name: 'Report Issues',
    type: 'sub',
    icon: 'format_line_spacing',
    badge: [{type: 'red', value: '6'}],
    children: [
      {state: 'filter', name: 'Post Issue'},
      {state: 'fullscreen', name: 'Track Reported Issues '}
    ]
  },


  {
    state: 'tables',
    name: 'Forms',
    type: 'sub',
    icon: 'file_copy',
    children: [
      {state: 'filter', name: 'Salary '},
      {state: 'fullscreen', name: 'Leave Form'}
      {state: 'fullscreen', name: 'Request Item'}

    ]},

  {
    state: 'taskboard',
    name: 'TASKBOARD',
    type: 'link',
    icon: 'dashboard',
  },


  {
    state: 'gallery',
    name: 'Photos',
    type: 'link',
    icon: 'picture_in_picture'
  },


  {
    state: 'filemanager',
    name: 'File Manager',
    type: 'link',
    icon: 'folder',
  },
  {
    state: 'software',
    name: 'Software',
    type: 'link',
    icon: 'device_hub'
  },

  
  {
    state: 'booking',
    name: 'Eatery',
    type: 'link',
    icon: 'fastfood'
  },
  {
    type: 'divider'
  },
  {
    type: 'title',
    name: 'SUPPORT'
  },
  {
    state: 'documentation',
    name: 'Knowledge Base',
    type: 'link',
    icon: ''
  }
];

@Injectable()
export class MenuService {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  add(menu: Menu) {
    MENUITEMS.push(menu);
  }
}
