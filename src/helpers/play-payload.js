exports.verify = (req, res, next) => {
  // real name and ext of the file to stream
  const fileName = req.body.file_name;
  // IP on the local network to access the sender
  const sourceIp = req.body.play_from;
  // The AuthKey to access the file
  const sourceKey = req.body.key;
  // The name of the machine that initiated the stream
  const sourceName = req.body.source_name;
  // Devie ID
  const playOn = req.body.play_on;
  // The path to the file
  const contentPath = req.body.content_path;
  // Poster
  const contentPoster = req.body.poster;
  // Presentable name of the file
  const presentableName = req.body.name;
  // Plot description
  const plotDescription = req.body.description;
  // Content Playtime
  const playTime = req.body.time;

  const ShowSeason = req.body.season;

  const dataToValidate = [
    fileName,
    sourceIp,
    sourceKey,
    sourceName,
    playOn,
    contentPath,
    contentPoster,
    presentableName,
    plotDescription,
    playTime,
    ShowSeason,
  ];

  dataToValidate.forEach((item) => {
    if (item === '' || item === undefined) {
      res.status(400).json({
        error: {
          message: 'Required field is missing or empty!',
        },
      });
    }
  });

  next();
};
