const extractProjectLink = (links: { type: string; link: string }[]) => {
  const externalLinkIndex = links.findIndex((link) => link.type === 'external');
  if (externalLinkIndex >= 0) {
    return links[externalLinkIndex].link;
  }
  const githubLinkIndex = links.findIndex((link) => link.type === 'github');
  if (githubLinkIndex >= 0) {
    return links[githubLinkIndex].link;
  }
  return null;
};

export default extractProjectLink;
