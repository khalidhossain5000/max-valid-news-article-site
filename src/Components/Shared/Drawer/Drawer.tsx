import type { ReactNode } from "react";

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  side?: "left" | "right";
  panelClassName?: string;
  children: ReactNode;
};

const Drawer = ({
  isOpen,
  onClose,
  side = "right",
  panelClassName = "",
  children,
}: DrawerProps) => {
  const sidePosition = side === "right" ? "right-0" : "left-0";
  const closedTransform =
    side === "right" ? "translate-x-full" : "-translate-x-full";

  return (
    <>
      {/* backdrop */}
      {isOpen && (
        <div onClick={onClose} className="fixed inset-0 z-40 bg-black/40" />
      )}

      {/* sliding panel - content comes from whoever uses the Drawer */}
      <div
        className={`fixed top-0 ${sidePosition} z-50 h-full w-72 transform shadow-lg transition-transform duration-300 ${
          isOpen ? "translate-x-0" : closedTransform
        } ${panelClassName}`}
      >
        {children}
      </div>
    </>
  );
};

export default Drawer;
