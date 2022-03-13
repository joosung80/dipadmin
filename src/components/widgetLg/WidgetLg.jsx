import IngestionStatus from "../ingestionStatus/IngestionStatus";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">DIP Dashboard</h3>
      <table className="widgetLgTable">
        <thead>
          <tr>
            <th className="widgetLgTh">Service</th>
            <th className="widgetLgTh">Negotiation</th>
            <th className="widgetLgTh">Agent STG</th>
            <th className="widgetLgTh">Agent PRD</th>
            <th className="widgetLgTh">Meta/Sample</th>
            <th className="widgetLgTh">Pipeline</th>
            <th className="widgetLgTh">PrePROD</th>
            <th className="widgetLgTh">PROD Open</th>
            <th className="widgetLgTh">DIS BDP Open</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="widgetLgUser">
              <span className="widgetLgName">Samsung Account</span>
            </td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <span className="widgetLgName">Samsung Internet</span>
            </td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <span className="widgetLgName">GateKeeper</span>
            </td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <span className="widgetLgName">Diagmon</span>
            </td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <span className="widgetLgName">LMP</span>
            </td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
          </tr>
          <tr>
            <td className="widgetLgUser">
              <span className="widgetLgName">FMM</span>
            </td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
            <td className="widgetLgAmount"><IngestionStatus /></td>
          </tr>          
        </tbody>

      </table>
    </div>
  );
}