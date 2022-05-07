import ContentLoader from "react-content-loader";

export default function Loading(props) {
  return (
    <div className="flex | w-2/3 px-1 bg-[#00000005] rounded-md">
      <div className="w-2/3 pl-10 py-5">
        <br />

        <ContentLoader viewBox="0 0 340 84">
          <rect x="0" y="0" width="67" height="11" rx="3" />
          <rect x="76" y="0" width="140" height="11" rx="3" />
          <rect x="127" y="48" width="53" height="11" rx="3" />
          <rect x="187" y="48" width="72" height="11" rx="3" />
          <rect x="18" y="48" width="100" height="11" rx="3" />
          <rect x="0" y="71" width="37" height="11" rx="3" />
          <rect x="18" y="23" width="140" height="11" rx="3" />
          <rect x="166" y="23" width="173" height="11" rx="3" />
        </ContentLoader>
        <br />
        <br />
        <ContentLoader viewBox="0 0 340 84">
          <rect x="0" y="0" width="67" height="11" rx="3" />
          <rect x="43" y="48" width="53" height="11" rx="3" />
          <rect x="76" y="0" width="100" height="11" rx="1" />
          <rect x="187" y="48" width="72" height="11" rx="3" />
          <rect x="18" y="48" width="100" height="11" rx="3" />
          <rect x="0" y="71" width="37" height="11" rx="3" />
          <rect x="18" y="23" width="140" height="11" rx="3" />
        </ContentLoader>
      </div>
    </div>
  );
}
