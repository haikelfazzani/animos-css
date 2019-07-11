function copyToClipboard(event, elmnt, setText) {
  elmnt.current.select();
  document.execCommand('copy');
  event.target.focus();

  setText('Copied!');
}

export default copyToClipboard;
