type Component = React.ComponentType<any> | React.LazyExoticComponent<any>;
interface IRouteConfig {
  path?: string;
  models?: () => Array<PromiseLike<any>>;
  component: Component;
  exact?: boolean;
  name: string;
  noCache?: boolean;
  noTags?: boolean;
  meta?: {
    title: string;
  };
  children?: Array<this>;
  notLogin?: boolean;
  redirect?: string;
  index?: boolean;
}

import Customer from "../view/customer";

import Operator from "../view/operator";

const routes: IRouteConfig[] = [
  {
    path: "/customer",
    name: "客户",
    component: Customer,
  },
  {
    path: "/operator",
    name: "运维",
    component: Operator,
  },
];

export default routes;
