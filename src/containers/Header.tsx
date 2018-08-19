import * as React from "react";
import { BarcodeEncoding } from "../App";
import RadioButtonGroup, {
  IRadioButtonGroupOption
} from "../components/RadioButtonGroup";

import HeaderIcon from "./HeaderIcon.png";

export interface IProps {
  barcodeType: BarcodeEncoding;
  onBarcodeTypeChange: (type: BarcodeEncoding) => any;
}

type RadioButtonOption = IRadioButtonGroupOption<BarcodeEncoding>;

const barcodeTypeOptions: RadioButtonOption[] = [
  {
    id: "qrcode",
    label: "QR Code"
  },
  {
    id: "code128",
    label: "Code 128"
  }
];

class Header extends React.Component<IProps> {
  public handleBarcodeTypeChange = (barcodeTypeOption: RadioButtonOption) =>
    this.props.onBarcodeTypeChange(barcodeTypeOption.id);

  public render() {
    const { barcodeType } = this.props;

    return (
      <header className="navbar navbar-dark bg-dark  flex-shrink-0 align-items-center">
        <span className="navbar-brand  d-flex align-items-center">
          <img src={HeaderIcon} height={30} width={30} className="mr-3" />
          QR Octo Robo
        </span>

        <RadioButtonGroup
          activeClass="btn-light"
          buttonColor="secondary"
          buttonSize="sm"
          options={barcodeTypeOptions}
          onChange={this.handleBarcodeTypeChange}
          value={barcodeType}
        />
      </header>
    );
  }
}

export default Header;
