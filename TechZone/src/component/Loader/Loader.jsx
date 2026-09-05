export default function Loader() {
    return (
        <>
            {/* CONTAINER OF ALL  */}
            <div className="pc-loader">
                {/* MAIN CASE  */}
                <div className="pc-case">
                    {/* BOWER BUTTON & USB */}
                    <div className="front-panel">
                        <div className="power-button" />
                        <div className="usb-ports">
                            <span />
                            <span />
                        </div>
                    </div>
                    {/* GLASS WINDOW */}
                    <div className="glass-window">
                        {/*  COOLER (FAN) */}
                        <div className="cooler-fan fan-1" />
                        <div className="cooler-fan fan-2" />
                        <div className="cooler-fan fan-3" />
                        {/* THE ALL RAM */}
                        <div className="ram-module" />
                        <div className="ram-module ram-2" />
                        {/* BOTTOM GPU */}
                        {/* <div class="gpu-block">
                      <div class="gpu-stripe"></div>
                  </div> */}
                    </div>
                    {/* FOOTER OF FEET */}
                    <div className="feet">
                        <div className="foot" />
                        <div className="foot" />
                    </div>
                </div>
            </div>

        </>
    )
}