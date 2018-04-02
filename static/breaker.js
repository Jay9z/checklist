function save_status()
{
alert("saved!");
var fso, tf; 
fso = new ActiveXObject("Scripting.FileSystemObject"); 
// 创建新文件 
tf = fso.CreateTextFile("testfile.txt", true); 
// 填写数据，并增加换行符 
tf.WriteLine("Testing 1, 2, 3.") ; 
// 增加3个空行 
tf.WriteBlankLines(3) ; 
// 填写一行，不带换行符 
tf.Write ("This is a test."); 
// 关闭文件 
tf.Close();
}

function CreateTable(id,rowCount,cellCount)
  {
     var table=$("<table border=\"1\">");
     table.appendTo($(id));
     for(var i=0;i<rowCount;i++)
     {
        var tr=$("<tr></tr>");
        tr.appendTo(table);
        for(var j=0;j<cellCount;j++)
        {
          var td=$("<td class='cell' ></td>");
          td.attr("id","cell"+i*10+j)
          td.attr("ondrop","drop(event)")
          td.attr("ondragover","allowDrop(event)")
          td.appendTo(tr);
          td.click(function (){
            // alert("clicked!")
          var img= $(this).css("background-image");
          if(img.search(".png")!=-1)
          {
          	var cls = $(this).attr("class").split(" ")
          	// alert(cls.length)
          	var breaker_old=""
          	var breaker_new=""
          	for(var i=0;i<cls.length;i++)
          	{
          //=== 要求在css中定义断路器图标类，类名符合breaker-color_status格式，且breaker关键字不为其它类使用
          //
          		if (cls[i].search("breaker")>-1)
          		{
          			breaker_old = cls[i];
          			breaker_sections = breaker_old.split("_");
          			if (breaker_sections[1]=="up") breaker_new=breaker_sections[0]+"_down";
          			else breaker_new =breaker_sections[0]+"_up";
          		}
          	}

          	//alert(breaker_old+","+breaker_new);
          	$(this).removeClass(breaker_old)
          	$(this).addClass(breaker_new)
          }
          });
        }
     }
     trend.appendTo(table);
     $(id).append("</table>");
  }

function clicked()
{
  $("td").click(function (){
    // alert("clicked!")
  var img= $(this).css("background-image");
  if(img.search(".jpg")!=-1)
  {
    var cls = $(this).attr("class").split(" ")
    // alert(cls.length)
    var breaker_old=""
    var breaker_new=""
    for(var i=0;i<cls.length;i++)
    {
  //=== 要求在css中定义断路器图标类，类名符合breaker-color_status格式，且breaker关键字不为其它类使用
  //
      if (cls[i].search("breaker")>-1)
      {
        breaker_old = cls[i];
        breaker_sections = breaker_old.split("_");
        if (breaker_sections[1]=="up") breaker_new=breaker_sections[0]+"_down";
        else breaker_new =breaker_sections[0]+"_up";
      }
    }

    alert(breaker_old+","+breaker_new);
    $(this).removeClass(breaker_old)
    $(this).addClass(breaker_new)
  }
  });

}

$(document).ready(function()
{
  $("td").click(function (){
    // alert("clicked!")
  var img= $(this).css("background-image");
  if(img.search(".jpg")!=-1)
  {
    var cls = $(this).attr("class").split(" ");
    // alert(cls);
    var breaker_old="";
    var breaker_new="";
    for(var i=0;i<cls.length;i++)
    {
  //=== 要求在css中定义断路器图标类，类名符合breaker-color_status格式，且breaker关键字不为其它类使用
      if (cls[i].search("breaker")>-1)
      {
        breaker_old = cls[i];
        breaker_sections = breaker_old.split("_");
        if (breaker_sections[1]=="up") breaker_new=breaker_sections[0]+"_down";
        else breaker_new =breaker_sections[0]+"_up";
      }
    }

    // alert(breaker_old+"-->"+breaker_new);
    $(this).removeClass(breaker_old);
    $(this).addClass(breaker_new);
  }
  });

});
