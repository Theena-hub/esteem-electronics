import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Examples = () => {
    return (
        <>           
            <div className='container mt-4  '>
                {/* <h1 className="titleThree fw-600 text-center">Trusted Source for Quality Electronic Components</h1> */}
                <div className='row mt-4'>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className="card">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Global Sourcing Capability</Accordion.Header>
                                    <Accordion.Body>
                                    Esteem has strong relationship with regional suppliers across the globe which includes manufacturers, franchised distributors and independent distributors.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className="card">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="1">
                                    <Accordion.Header>Cost Saving Solutions</Accordion.Header>
                                    <Accordion.Body>
                                    Esteem's professionally trained procurement team have capabilities to match buyers and sellers of electronic components to achieve cost saving initiatives.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className="card">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="2">
                                    <Accordion.Header>Shortage Sourcing Solutions</Accordion.Header>
                                    <Accordion.Body>
                                    Esteem's highly trained procurement team can keep your line running by procuring the electronic components you need from the network of qualified vendor base worldwide.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className="card">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="3">
                                    <Accordion.Header>Excess Inventory Solutions</Accordion.Header>
                                    <Accordion.Body>
                                    Esteem can turn your excess inventory to revenue, Buy / Sell contract arrangement can be designed which can maximize returns to your investment
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className="card">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="4">
                                    <Accordion.Header>Supplier Consolidation</Accordion.Header>
                                    <Accordion.Body>
                                    Esteem can help lowering your total cost of procurement by reducing your number of suppliers, which in turn reduces your transactional and logistics costs.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-6 mb-4'>
                        <div className="card">
                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="5">
                                    <Accordion.Header>Vendor Managed Inventory</Accordion.Header>
                                    <Accordion.Body>
                                    Esteem offers customized vendor managed inventory programs that can reduce your inventory ownership, warehouse personal costs and space.
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
export default Examples;