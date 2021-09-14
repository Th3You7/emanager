import React from "react";
export const Store = React.lazy(() => import("./StoreScreen"));
export const Product = React.lazy(() => import("./ProductScreen"));
export const Admin = React.lazy(() => import("./AdminScreen"));

export const Cart = React.lazy(() => import("./CartScreen"));
export const AdminEdit = React.lazy(() => import("./AdminEditScreen"));
export const AllProducts = React.lazy(() => import("./AllProductsScreen"));
export const Categories = React.lazy(() => import("./CategoriesScreen"));
export const Edit = React.lazy(() => import("./EditScreen"));
export const Add = React.lazy(() => import("./AddScreen"));
export const Remove = React.lazy(() => import("./RemoveScreen"));

export const AddCategory = React.lazy(() => import("./AddCategoryScreen"));
export const RemoveCategory = React.lazy(() =>
  import("./RemoveCategoryScreen")
);

export const Wallet = React.lazy(() => import("./WalletScreen"));
export const Dashboard = React.lazy(() => import("./DashboardScreen"));

export const Sales = React.lazy(() => import("./SalesScreen"));
export const RemoveSale = React.lazy(() => import("./RemoveSaleScreen"));
export const Spending = React.lazy(() => import("./SpendingScreen"));
export const RemoveSpending = React.lazy(() =>
  import("./RemoveSpendingScreen")
);
export const AddSpending = React.lazy(() => import("./AddSpendingScreen"));
export const Confirm = React.lazy(() => import("./ConfirmScreen"));

export const Loan = React.lazy(() => import("./LoanScreen"));
export const LoanProfile = React.lazy(() => import("./LoanProfileScreen"));
export const LoanProducts = React.lazy(() => import("./LoanProductsScreen"));
export const LoanProductsRemove = React.lazy(() =>
  import("./LoanProductsRemoveScreen")
);
export const LoanPayments = React.lazy(() => import("./LoanPaymentsScreen"));
export const LoanPaymentsAdd = React.lazy(() =>
  import("./LoanPaymentsAddScreen")
);
export const LoanPaymentsRemove = React.lazy(() =>
  import("./LoanPaymentsRemoveScreen")
);
export const LoanProfileEdit = React.lazy(() =>
  import("./LoanProfileEditScreen")
);
export const LoanProfileRemove = React.lazy(() =>
  import("./LoanProfileRemoveScreen")
);
export const LoanProfileAdd = React.lazy(() =>
  import("./LoanProfileAddScreen")
);

export const LogIn = React.lazy(() => import("./LogInScreen"));

export const Invoices = React.lazy(() => import("./InvoicesScreen"));
export const InvoicesRemove = React.lazy(() =>
  import("./InvoicesRemoveScreen")
);

// export { default as Store } from "./StoreScreen";
// export { default as Product } from "./ProductScreen";
// export { default as Cart } from "./CartScreen";
// export { default as Admin } from "./AdminScreen";
// export { default as AdminEdit } from "./AdminEditScreen";
// export { default as AllProducts } from "./AllProductsScreen";
// export { default as Categories } from "./CategoriesScreen";
// export { default as Edit } from "./EditScreen";
// export { default as Add } from "./AddScreen";
// export { default as Remove } from "./RemoveScreen";

// export { default as AddCategory } from "./AddCategoryScreen";
// export { default as RemoveCategory } from "./RemoveCategoryScreen";

// export { default as Wallet } from "./WalletScreen";
// export { default as Dashboard } from "./DashboardScreen";

// export { default as Sales } from "./SalesScreen";
// export { default as RemoveSale } from "./RemoveSaleScreen";
// export { default as Spending } from "./SpendingScreen";
// export { default as RemoveSpending } from "./RemoveSpendingScreen";
// export { default as AddSpending } from "./AddSpendingScreen";
// export { default as Confirm } from "./ConfirmScreen";

// export { default as Loan } from "./LoanScreen";
// export { default as LoanProfile } from "./LoanProfileScreen";
// export { default as LoanProducts } from "./LoanProductsScreen";
// export { default as LoanProductsRemove } from "./LoanProductsRemoveScreen";
// export { default as LoanPayments } from "./LoanPaymentsScreen";
// export { default as LoanPaymentsAdd } from "./LoanPaymentsAddScreen";
// export { default as LoanPaymentsRemove } from "./LoanPaymentsRemoveScreen";
// export { default as LoanProfileEdit } from "./LoanProfileEditScreen";
// export { default as LoanProfileRemove } from "./LoanProfileRemoveScreen";
// export { default as LoanProfileAdd } from "./LoanProfileAddScreen";

// export { default as LogIn } from "./LogInScreen";

// export { default as Invoices } from "./InvoicesScreen";
// export { default as InvoicesRemove } from "./InvoicesRemoveScreen";
