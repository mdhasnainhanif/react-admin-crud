import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

// dashboard pages
import DashboardEcommerce from './pages/dashboardpages/DashboardEcommerce';
import Tables from './pages/table/Tables';
import BasicForm from './pages/form layouts/BasicForm';
import HorizontalForm from './pages/form layouts/HorizontalForm';
import HiddenLabels from './pages/form layouts/HiddenLabels';
import FormAction from './pages/form layouts/FormAction';
import RowSeparator from './pages/form layouts/RowSeparator';
import BorderedForm from './pages/form layouts/BorderedForm';
import SimpleLogin from './pages/auth/simplelogin';
import SimpleRegister from './pages/auth/simpleregister';
import Userprofile from './pages/user/userprofile';
import MuiDataTable from './components/tables/MuiDataTable';







function App() {
  return (
    <div>
      <Router>
        <Routes>
          {/* <Route path='/' element={<Dashboard />} /> */}
          <Route path='/' element={<DashboardEcommerce />} />
          <Route path='/basicform' element={<BasicForm />} />
          <Route path='/horizontalform' element={<HorizontalForm />} />
          <Route path='/hiddenlabelform' element={<HiddenLabels />} />
          <Route path='/formaction' element={<FormAction />} />
          <Route path='/rowseparatorform' element={<RowSeparator />} />
          <Route path='/borderedform' element={<BorderedForm />} />
          <Route path='/login' element={<SimpleLogin />} />
          <Route path='/register' element={<SimpleRegister />} />
          <Route path='/userprofile' element={<Userprofile />} />
          <Route path='/basictable' element={<Tables />} />
          <Route path='/table' element={<MuiDataTable />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
