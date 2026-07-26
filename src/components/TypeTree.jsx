export default function TypeTree() {
  return (
    <div className="type-tree" dir="ltr">
      <div className="tree-root">
        <div className="tree-node root-node">Object</div>
      </div>
      <div className="tree-branches">
        <div className="tree-branch has-children">
          <div className="tree-node">num</div>
          <div className="tree-sub-branches">
            <div className="tree-sub-branch"><div className="tree-node">int</div></div>
            <div className="tree-sub-branch"><div className="tree-node">double</div></div>
          </div>
        </div>
        <div className="tree-branch">
          <div className="tree-node">String</div>
        </div>
        <div className="tree-branch">
          <div className="tree-node">List</div>
        </div>
        <div className="tree-branch">
          <div className="tree-node">bool</div>
        </div>
        <div className="tree-branch">
          <div className="tree-node">Map</div>
        </div>
      </div>
    </div>
  );
}
