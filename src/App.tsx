import * as React from "react";
import Barcode from "./Barcode";
import BarcodeList from "./containers/BarcodeList";
import Header from "./containers/Header";
import Sidebar from "./containers/Sidebar";

export type BarcodeEncoding = "qrcode" | "code128";

const initialState = {
  barcodeType: "qrcode" as BarcodeEncoding,
  barcodes: [] as Barcode[]
};
type State = Readonly<typeof initialState>;

class App extends React.Component<{}, State> {
  public readonly state: State = initialState;

  public updateBarcodeType = (type: BarcodeEncoding) =>
    this.setState({ barcodeType: type });

  public addBarcode = (barcode: Barcode) => {
    this.setState({
      barcodes: [...this.state.barcodes, barcode]
    });
  };

  public deleteBarcode = (barcode: Barcode) => {
    this.setState({
      barcodes: this.state.barcodes.filter(b => b !== barcode)
    });
  };

  public render() {
    const { barcodeType, barcodes } = this.state;
    return (
      <React.Fragment>
        <Header
          barcodeType={barcodeType}
          onBarcodeTypeChange={this.updateBarcodeType}
        />

        <div className="container-fluid  d-flex flex-fill flex-column">
          <div className="row flex-fill align-items-stretch">
            <div className="col-12 col-md-4 col-xl-3  border-right  d-flex flex-column">
              <Sidebar
                barcodes={barcodes}
                onAddBarcode={this.addBarcode}
                onDeleteBarcode={this.deleteBarcode}
              />
            </div>

            <div className="content-wrapper col-12 col-md-8 col-xl-9 pl-md-5">
              <BarcodeList barcodes={barcodes} barcodeEncoding={barcodeType} />
            </div>
          </div>
        </div>

        <footer className="d-none d-md-flex navbar navbar-light bg-light  justify-content-center align-items-center flex-shrink-0">
          <div>
            Made with &#x2764; by{" "}
            <a className="text-muted" href="https://twitter.com/derkatzenbar">
              @DerKatzenbar
            </a>
            <strong className="mx-2">&middot;</strong>
            <a
              className="text-muted"
              href="https://github.com/katzenbar/qr-octo-robo"
            >
              Get source code
            </a>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default App;
