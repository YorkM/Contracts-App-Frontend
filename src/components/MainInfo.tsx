import { ContractsModal } from './ContractsModal';
import { InfoTable, Navbar } from '../components';

export const MainInfo = () => {
    return (
        <>        
            <Navbar />

            <div className="container mx-auto">
                <div className="bg-white shadow-md rounded my-6">
                    <InfoTable />
                </div>
            </div>

            <ContractsModal />        
        </>
    )
}
