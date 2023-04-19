import { Box } from '@chakra-ui/layout';
import DashboardSidebar from '../molecules/dashboard_sidebar';

const DashboardLayout = ({ children }: any) => {
    return (
        <DashboardSidebar>
            {children}
        </DashboardSidebar>
    );
}

export default DashboardLayout;