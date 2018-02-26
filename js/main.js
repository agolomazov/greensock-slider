(function ($) {
  var $projects = $('.projects'), // projects container
      $project = $('.project'), // individual project
      $projectImageBefore = CSSRulePlugin.getRule('.project-image:before'),
      $projectImageAfter = CSSRulePlugin.getRule('.project-image:after'),
      tlProjects, tlProject;
  tlProject = new TimelineMax({
    repeat: -1,
    repeatDelay: 2
  });

  var projectClasses = $project.attr('class').split(' '),
      projectClass = projectClasses[1],
      $pixel = $project.find('.pixel'),
      $pixels = $project.find('.project-pixels'),
      $projectTitle = $project.find('.project-title'),
      $projectSubtitle = $project.find('.project-subtitle'),
      $projectImage = $project.find('.project-image');

  // Create a project timeline
  tlProject.fromTo(
    $projectImage,
    4,
    { autoAlpha: 0, xPercent: '-200' },
    { autoAlpha: 1, xPercent: '0', ease: Power4.easeInOut }
  );
})(jQuery);
