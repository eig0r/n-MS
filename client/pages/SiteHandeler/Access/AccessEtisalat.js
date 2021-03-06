Template.AccessEtisalat.helpers({
    SAI() {return Session.get('SiteAlarmInformation')
  },
    SsH() {return Session.get('SiteSharing')}

});

// Insert Access VF
Template.AccessEtisalat.events({
  'click .AccessVF':function (event) {
     event.preventDefault();
      var si=Session.get('OneSiteID');
      var ar= document.getElementById("Area").value;
      var an= document.getElementById("AlarmName").value;
      var of= document.getElementById("Office").value;
      var AccessType= document.getElementById("AccessType").value;
      var SiteName= document.getElementById("SiteName").value;
      var Vfcode= document.getElementById("Vfcode").value;

      SiteAccess.insert({
      SiteID:si,
      SiteName:SiteName,
      Area: ar,
      Office:of,
      AccessType:AccessType,
      Vfcode:Vfcode,
      createdAt:new Date()
      });

      AllAlarms.insert({
      SiteID: si,
      AlarmName: an,
      Access:'Access ET',
      createdAt:new Date()
      });
    //   return false;
       var ID=Session.get('SiteAlarmID');
       SiteAlarmAdd.update({_id:ID},
         {$set:{Access: 'Access ET' }});
}
  });

Template.AccessEtisalat.events({
    'click #VFAccess': function(event){
     event.preventDefault();
     var si= Session.get('OneSiteID');
     Session.set('SiteSharing',CairoOrangeSharing.find( { SiteCode:si} ).fetch());

}
  });


  Template.AccessEtisalat.events({
      'click #AccessVFclear': function(event){
       event.preventDefault();
       var si= Session.get('OneSiteID');

       var ID=Session.get('SiteAlarmID');
       SiteAlarmAdd.update({_id:ID},
         {$set:{Access: 'Access VF Clear' }});
}


    });
