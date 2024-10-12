interface ObjectsProps {
  handleObjectClick: (e: React.MouseEvent<SVGPathElement>) => void;
  className?: string;
}
function Objects({ handleObjectClick, className }: ObjectsProps) {
  return (
    <g id="Objects">
      <path
        id="Adidas"
        className={`${className} object`}
        d="M201.6 436.6v-67.2H98.4v67.9h103.2v-.7z"
        onClick={handleObjectClick}
      />
      <path
        id="Nike"
        className={`${className} object`}
        d="M201.6 369.4v67.2h214v-163h-284v95.8h70z"
        onClick={handleObjectClick}
      />
      <path
        id="McShark"
        className={`${className} object`}
        d="M504.2 273.6v266.2h269V273.6h-269z"
        onClick={handleObjectClick}
      />
      <path
        id="Zara"
        className={`${className} object`}
        d="M879.6 530.6h98v-257H773.2v266.2h106.4v-9.2z"
        onClick={handleObjectClick}
      />
      <path
        id="Primark"
        className={`${className} object`}
        d="M977.6 805.5h343.2v92.9H1431V273.6H977.6v531.9z"
        onClick={handleObjectClick}
      />
      <path
        id="Svarovski"
        className={`${className} object`}
        d="M977.6 805.5v92.9h343.2v-92.9H977.6z"
        onClick={handleObjectClick}
      />
      <path
        id="H&M"
        className={`${className} object`}
        d="M327.8 533.6V465h-91.2v68.6h91.2z"
        onClick={handleObjectClick}
      />
      <path
        id="MediaMarkt"
        className={`${className} object`}
        d="M327.8 506.2h59V465h-59v41.2z"
        onClick={handleObjectClick}
      />
      <path
        id="Sephora"
        className={`${className} object`}
        d="M342.8 533.6h44v-27.4h-59v27.4h15z"
        onClick={handleObjectClick}
      />
      <path
        id="Центральный лифт"
        className={`${className} object`}
        d="M346.3 609.1v-75.5h-60.6v75.5h60.6z"
        onClick={handleObjectClick}
      />
      <path
        id="Уборная-1"
        className={`${className} object`}
        d="M386.8 656.2V533.6h-44v122.6h44z"
        onClick={handleObjectClick}
      />
      <path
        id="Starbucks"
        className={`${className} object`}
        d="M504.5 667.8v-99.6h-84.4v99.6h84.4z"
        onClick={handleObjectClick}
      />
      <path
        id="KFC"
        className={`${className} object`}
        d="M698.5 705.7V568.2h-194v137.5h194z"
        onClick={handleObjectClick}
      />
      <path
        id="McDonald's"
        className={`${className} object`}
        d="M773.3 705.7V568.2h-74.8v137.5h74.8z"
        onClick={handleObjectClick}
      />
      <path
        id="Rolex"
        className={`${className} object`}
        d="M845.6 705.7V568.2h-72.3v137.5h72.3z"
        onClick={handleObjectClick}
      />
      <path
        id="Уборная-2"
        className={`${className} object`}
        d="M875.2 615.3h102.4V559H875.2v56.3z "
        onClick={handleObjectClick}
      />
      <path
        id="Лифт"
        className={`${className} object`}
        d="M875.2 661.1h102.4v-45.8H875.2v45.8z"
        onClick={handleObjectClick}
      />
      <path
        id="Тамбур"
        className={`${className} object`}
        d="M78.1 707.3v-86H27.8v86.9h50.3v-.9z"
        onClick={handleObjectClick}
      />
      <path
        id="Охрана"
        className={`${className} object`}
        d="M193.7 666.5v-48.8h-52.8v49.4h52.8v-.6z"
        onClick={handleObjectClick}
      />
      <path
        id="Victoria's Secret"
        className={`${className} object`}
        d="M245.4 697.1H131.3v37.8H50.9v72.3h46.7v91.2h147.8V697.1z"
        onClick={handleObjectClick}
      />
      <path
        id="Pandora"
        className={`${className} object`}
        d="M245.4 697.1v201.3h175.2V697.1H245.4z"
        onClick={handleObjectClick}
      />
      <path
        id="Foot Locker"
        className={`${className} object`}
        d="M504.3 734.2v164.2h193.6V734.2H504.3z"
        onClick={handleObjectClick}
      />
      <path
        id="Pharmacy"
        className={`${className} object`}
        d="M697.9 734.2v164.2h181.2V734.2H697.9z"
        onClick={handleObjectClick}
      />
      <path
        id="GameStop"
        className={`${className} object`}
        d="M879.1 734.2v164.2h98.5V734.2h-98.5z"
        onClick={handleObjectClick}
      />
    </g>
  );
}

export default Objects;
