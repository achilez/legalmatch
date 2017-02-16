$( function() {

    var availableTags = [
    	"Huntsville 00000 thru 35816",
		"Anchorage 99501 thru 99524",
		"Phoenix 85001 thru 85055",
		"Little Rock 72201 thru 72217",
		"Beverly Hills 94203 thru 94209",
		"Denver 80201 thru 80239",
		"Hartford 06101 thru 06112",
		"Dover 19901 thru 19905",
		"Washington 20001 thru 20020",
		"Orlando 32501 thru 32509",
		"Atlanta 30301 thru 30381",
		"Honolulu 96801 thru 96830",
		"Montpelier 83254",
		"Springfield 60601 thru 60641",
		"62701 thru 62709",
		"Indianapolis 46201 thru 46209",
		"Des Moines 52801 thru 52809",
		"50301 thru 50323",
		"Wichita 67201 thru 67221",
		"Hazard 41701- 41702",
		"New Orleans 70112 thru 70119",
		"Freeport 04032 thru 04034",
		"Baltimore 21201 thru 21237",
		"Boston 02101 thru 02137",
		"Gaylord 49036",
		"Duluth 55801 thru 55808",
		"Biloxi 39530 thru 39535",
		"St. Louis 63101 thru 63141",
		"Laurel 59044",
		"Hastings 68901 - 68902",
		"Reno 89501 thru 89513",
		"Ashland 03217",
		"Livingston 07039",
		"Santa Fe 87500 thru 87506",
		"New York 10001 thru 10048",
		"Oxford 27565",
		"Walhalla 58282",
		"Cleveland 44101 thru 44179",
		"Tulsa 74101 thru 74110",
		"Portland 97201 thru 97225",
		"Pittsburgh 15201 thru 15244",
		"Newport 02840 - 02841",
		"Camden 29020",
		"Aberdeen 57401 - 57402",
		"Nashville 37201 thru 37222",
		"Austin 78701 thru 78705",
		"Logan 84321 thru 84323",
		"Killington 05751",
		"Altavista 24517",
		"Bellevue 98004 thru 98009",
		"Beaver 25813",
		"Milwaukee 53201 thru 53228",
		"Pinedale 8294"
    ];
    $( "#txtCity" ).autocomplete({
      source: availableTags
    });


	$( "#txtCategory" ).change(function() {
		$('#modalCategory').modal({
		  keyboard: false
		});		
	});




    
  } );