function saveTextAsFile(textToWrite,fileNameToSaveAs)
{
  // var textToWrite = document.getElementById("inputTextToSave").value;
  var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
  // var fileNameToSaveAs = document.getElementById("inputFileNameToSaveAs").value;
    var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null)
  {
      // Chrome allows the link to be clicked
      // without actually adding it to the DOM.
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  }
  else
  {
      // Firefox requires the link to be added to the DOM
      // before it can be clicked.
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = destroyClickedElement;
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
  }

  downloadLink.click();
}

function breaker_status(class_attributes)
{
  var breaker_status="";
  if (class_attributes)
  {
  var cls = class_attributes.split(" ");
  for(var i=0;i<cls.length;i++)
  {
//=== 要求在css中定义断路器图标类，类名符合breaker-color_status格式，且breaker关键字不为其它类使用
    if (cls[i].search("breaker")>-1)
    {
      breaker_status= cls[i];
      break;
    }
  }
  }
  return breaker_status;
}
