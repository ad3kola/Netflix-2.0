// Plan.tsx
import { NetflixPlans } from "@/utils/typings";

interface PlanProps {
  plan: NetflixPlans;
  onSelectTab?: (title: string) => void;
  activeTab?: string;
}

function Plan({ plan, onSelectTab, activeTab }: PlanProps) {
  const handleClick = () => {
    if (onSelectTab) {
      onSelectTab(plan.title);
    }
  };

	return (
		<div
		onClick={handleClick}
		className={`lg:cursor-pointer lg:border lg:border-gray-300 p-2 rounded-2xl bg-white duration-200 ease-in scale-105 transition transform ${
		  activeTab?.toLowerCase() === plan.title.toLowerCase() && 'shadow-lg shadow-slate-950'
		} `}
	  >
		<div
		  className={`hidden lg:flex flex-col p-4 pb-8 rounded-xl bg-gradient-to-br from-blue-900 ${plan.gradient} text-gray-100 font-semibold`}
		>
		  <h3 className="text-base">{plan.title}</h3>
		  <h4 className="text-sm">{plan.res}</h4>
		</div>
		<div className="mt-2 md:px-4 w-full">
		  <table className="table-fixed w-full">
			<tbody className="text-sm w-full">
			  {plan.offers.map((each, indx) => (
				<tr
				  key={indx}
				  className="text-sm flex lg:flex-col lg:justify-start lg:items-start items-center justify-between w-full py-3 first:border-none border-t border-gray-300"
				>
				  <td className="text-gray-500 font-bold">{each.feature}</td>
				  <td className="text-sm text-gray-800 font-bold tracking-wide">{each.value}</td>
				</tr>
			  ))}
			</tbody>
		  </table>
		</div>
	  </div>
  );
}

export default Plan;
