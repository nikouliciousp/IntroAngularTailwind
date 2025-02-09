export interface SideBar {
  text: string;
  path: string;
}

export interface Joke {
  icon_url: string;
  id: string;
  url: string;
  value: string;
}

// User Interface
export interface User {
  id: number;
  name: {
    first: string;
    last: string;
  };
  age: number;
}
