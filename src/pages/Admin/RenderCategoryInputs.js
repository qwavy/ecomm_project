
import { observer } from "mobx-react-lite";
import { useState } from "react";

const RenderCategoryInputs = (props) => {
    let productCategory = props.productCategory
    let handleInputChange = props.handleInputChange

    const [productCharacteristic, setProductCharacteristic] = useState({

    });

    if (productCategory === "laptop") {
        return (
            <div>
                <label>
                    <h3>

                        Processor Model
                    </h3>
                    <input
                        type="text"
                        value={productCharacteristic.processer_model}
                        onChange={(e) =>
                            handleInputChange("processer_model", e.target.value)}
                        placeholder="Processor Model"
                    />
                </label>

                <label>
                    <h3>

                        RAM
                    </h3>
                    <input
                        type="number"
                        value={productCharacteristic.ram}
                        onChange={(e) => handleInputChange("ram", e.target.value)
                        }
                        placeholder="Ram"
                    />
                </label>

                <label>
                    <h3>

                        SSD
                    </h3>
                    <input
                        type="number"
                        value={productCharacteristic.ssd}
                        onChange={(e) => handleInputChange("ssd", e.target.value)
                        }
                        placeholder="SSD"
                    />
                </label>

                <label>
                    <h3>

                        Display
                    </h3>
                    <input
                        type="number"
                        value={productCharacteristic.display}
                        onChange={(e) => handleInputChange("display", e.target.value)
                        }
                        placeholder="Display"
                    />
                </label>
                <label>
                    <h3>

                        Display Hz
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.display_hz}
                        onChange={(e) => handleInputChange("display_hz", e.target.value)
                        }
                        placeholder="Display Hz"
                    />
                </label>
                <label>
                    <h3>

                        Video Card
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.video_card}
                        onChange={(e) => handleInputChange("video_card", e.target.value)
                        }
                        placeholder="Video Card"
                    />
                </label>
            </div>
        );
    } else if (productCategory === "monitor") {
        return (
            <div>
                <label>
                    <h3>

                        Response Time:
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.response_time}
                        onChange={(e) =>
                            handleInputChange("response_time", e.target.value)
                        }
                    />
                </label>

                <label>
                    <h3>

                        Display:
                    </h3>
                    <input

                        type="number"
                        value={productCharacteristic.display}
                        onChange={(e) =>
                            handleInputChange("display", e.target.value)
                        }
                    />
                </label>

                <label>
                    <h3>

                        Display Hz
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.display_hz}
                        onChange={(e) => handleInputChange("display_hz", e.target.value)}
                    />
                </label>
                <label>
                    <h3>

                        Matrix
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.matrix}
                        onChange={(e) => handleInputChange("matrix", e.target.value)}
                    />
                </label>
                <label>
                    <h3>

                        Resolution
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.resolution}
                        onChange={(e) => handleInputChange("resolution", e.target.value)}
                    />
                </label>
                <label>
                    <h3>

                        Color Depth
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.color_depth}
                        onChange={(e) => handleInputChange("color_depth", e.target.value)}
                    />
                </label>
                <label>
                    <h3>

                        Brightness
                    </h3>
                    <input
                        type="number"
                        value={productCharacteristic.brightness}
                        onChange={(e) => handleInputChange("brightness", e.target.value)}
                    />
                </label>



            </div>
        );
    } else if (productCategory == "motherboard") {
        return (
            <div>
                <label>
                    Socket
                    <input
                        type="string"
                        value={productCharacteristic.socket}
                        onChange={(e) =>
                            handleInputChange("socket", e.target.value)
                        }
                    />
                </label>
                <label>
                    Chipset
                    <input
                        type="string"
                        value={productCharacteristic.chipset}
                        onChange={(e) =>
                            handleInputChange("chipset", e.target.value)
                        }
                    />
                </label>
                <label>
                    Max Ram
                    <input
                        type="number"
                        value={productCharacteristic.max_ram}
                        onChange={(e) =>
                            handleInputChange("max_ram", e.target.value)
                        }
                    />
                </label>
                <label>
                    Type Ram
                    <input
                        type="string"
                        value={productCharacteristic.type_ram}
                        onChange={(e) =>
                            handleInputChange("type_ram", e.target.value)
                        }
                    />
                </label>
                <label>
                    Form Factor
                    <input
                        type="string"
                        value={productCharacteristic.form_factor}
                        onChange={(e) =>
                            handleInputChange("form_factor", e.target.value)
                        }
                    />
                </label>
                <label>
                    Max Ram Hz
                    <input
                        type="number"
                        value={productCharacteristic.max_ram_hz}
                        onChange={(e) =>
                            handleInputChange("max_ram_hz", e.target.value)
                        }
                    />
                </label>
                <label>
                    Audio Chip
                    <input
                        type="string"
                        value={productCharacteristic.audio_chip}
                        onChange={(e) =>
                            handleInputChange("audio_chip", e.target.value)
                        }
                    />
                </label>
            </div>
        )
    } else if (productCategory == "desktop") {
        return (
            <div>

                <label>
                    <h3>Processer</h3>
                    <input
                        type="string"
                        value={productCharacteristic.processer}
                        onChange={(e) =>
                            handleInputChange("processer", e.target.value)
                        }
                        placeholder="Processer"
                    />
                </label>
                <label>
                    <h3>

                        Processer Model
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.processer_model}
                        onChange={(e) =>
                            handleInputChange("processer_model", e.target.value)
                        }
                        placeholder="Processer Model"
                    />
                </label>
                <label>
                    <h3>

                        Motherboard
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.motherboard}
                        onChange={(e) =>
                            handleInputChange("motherboard", e.target.value)
                        }
                        placeholder="Motherboard"
                    />
                </label>
                <label>
                    <h3>

                        Ram
                    </h3>
                    <input
                        type="number"
                        value={productCharacteristic.ram}
                        onChange={(e) =>
                            handleInputChange("ram", e.target.value)
                        }
                        placeholder="Ram"
                    />
                </label>
                <label>
                    <h3>

                        Ssd
                    </h3>
                    <input
                        type="number"
                        value={productCharacteristic.ssd}
                        onChange={(e) =>
                            handleInputChange("ssd", e.target.value)
                        }
                        placeholder="Ssd"
                    />
                </label>
                <label>
                    <h3>

                        Video card
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.video_card}
                        onChange={(e) =>
                            handleInputChange("video_card", e.target.value)
                        }
                        placeholder="Video card"
                    />
                </label>
                <label>
                    <h3>

                        Block Power
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.block_power}
                        onChange={(e) =>
                            handleInputChange("block_power", e.target.value)
                        }
                        placeholder="Block Power"
                    />
                </label>
                <label>
                    <h3>

                        Type Ram
                    </h3>
                    <input
                        type="string"
                        value={productCharacteristic.type_ram}
                        onChange={(e) =>
                            handleInputChange("type_ram", e.target.value)
                        }
                        placeholder="Type Ram"
                    />
                </label>

            </div>
        )
    }

    return null;
};

export default observer(RenderCategoryInputs)