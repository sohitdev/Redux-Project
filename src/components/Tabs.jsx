import { useDispatch, useSelector } from "react-redux";
import { setActiveTabs } from "../redux/features/searchSlice";

const Tabs = () => {
  const tabs = ["photo", "video", "gif"];

  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);

  return (
    <div className="flex gap-5 p-10">
      {tabs.map(function (ele, idx) {
        return (
          <button
            onClick={() => {
              dispatch(setActiveTabs(ele));
            }}
            className={`${activeTab == ele ? "bg-blue-600" : "bg-gray-600"} transition cursor-pointer active:scale-95  px-5 py-2`}
            key={idx}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
};

export default Tabs;
