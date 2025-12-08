import { visit } from 'unist-util-visit';

export default function remarkAddClasses() {
  return (tree) => {
    visit(tree, (node) => {
      // Check for image nodes with a directive
      if (
        node.type === 'image' &&
        node.data &&
        node.data.directives &&
        node.data.directives.length
      ) {
        const directive = node.data.directives[0]; // simple example, first directive
        if (directive.name === 'class') {
          node.data.hProperties = node.data.hProperties || {};
          node.data.hProperties.className = directive.attributes.className || '';
        }
      }
    });
  };
}
